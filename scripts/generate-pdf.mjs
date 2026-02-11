import puppeteer from "puppeteer";

const PORT = process.argv[2] || 3000;
const BASE_URL = `http://localhost:${PORT}`;

console.log(`Using server at ${BASE_URL}`);

try {
  await fetch(BASE_URL);
} catch {
  console.error(`Server not reachable at ${BASE_URL}. Make sure 'npm run dev' is running.`);
  process.exit(1);
}

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

async function generatePDF(theme, outputPath) {
  const page = await browser.newPage();
  // Use A4-width viewport (roughly 794px at 96dpi)
  await page.setViewport({ width: 794, height: 1123 });

  // Inject critical overrides via stylesheet BEFORE page loads
  await page.evaluateOnNewDocument(() => {
    const style = document.createElement("style");
    style.textContent = `
      .profile-photo { filter: none !important; -webkit-filter: none !important; }
      .animate-in { animation: none !important; opacity: 1 !important; transform: none !important; }
      body::before { display: none !important; }
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }
    `;
    // Inject as early as possible
    if (document.head) {
      document.head.appendChild(style);
    } else {
      document.addEventListener("DOMContentLoaded", () => document.head.appendChild(style));
    }
  });

  await page.goto(BASE_URL, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 2000));

  // Set theme
  if (theme === "dark") {
    await page.evaluate(() => document.documentElement.classList.add("dark"));
  } else {
    await page.evaluate(() => document.documentElement.classList.remove("dark"));
  }

  // Force all styles via DOM
  await page.evaluate(() => {
    // Remove unwanted elements
    document.querySelector('button[aria-label="Toggle dark mode"]')?.remove();
    document.querySelector(".download-btn")?.remove();

    // Force all animated sections visible
    document.querySelectorAll(".animate-in").forEach((el) => {
      el.classList.remove("animate-in");
    });
    for (let i = 1; i <= 7; i++) {
      document.querySelectorAll(`.delay-${i}`).forEach((el) => el.classList.remove(`delay-${i}`));
    }

    // Remove Next.js dev error overlay
    document.querySelectorAll("nextjs-portal").forEach((el) => el.remove());

    // Remove footer to avoid empty trailing page
    document.querySelector("footer")?.remove();

    // Convert photo to base64 data URI via canvas to bypass Chrome PDF grayscale bug
    const photo = document.querySelector('img[alt="Georgi Todorov"]');
    if (photo) {
      const canvas = document.createElement("canvas");
      canvas.width = photo.naturalWidth || 120;
      canvas.height = photo.naturalHeight || 120;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(photo, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");

      const newImg = document.createElement("img");
      newImg.src = dataUrl;
      newImg.alt = photo.alt;
      newImg.style.cssText = "border-radius: 9999px; object-fit: cover; width: 120px; height: 120px;";
      photo.replaceWith(newImg);
    }

    // Fix gradient text: Chrome PDF can't render -webkit-text-fill-color: transparent
    document.querySelectorAll(".gradient-text").forEach((el) => {
      el.style.cssText = "background: none; -webkit-background-clip: unset; -webkit-text-fill-color: var(--accent); background-clip: unset;";
    });

    // Remove min-h-svh to prevent empty trailing page
    const container = document.querySelector(".min-h-svh");
    if (container) container.style.minHeight = "auto";

    // Compact styles to fit on 2 pages
    const printStyle = document.createElement("style");
    printStyle.textContent = `
      .glass-card { break-inside: avoid; padding: 1.25rem !important; }
      header { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
      .space-y-10 > * + * { margin-top: 1.25rem !important; }
      .space-y-8 > * + * { margin-top: 1.25rem !important; }
      .pb-16 { padding-bottom: 0 !important; }
      .mb-5, .mb-6 { margin-bottom: 0.75rem !important; }
      .glow-pill { padding: 0.375rem 0.75rem !important; font-size: 0.8125rem !important; gap: 0.375rem !important; }
      .flex-wrap.gap-3 { gap: 0.5rem !important; }
    `;
    document.head.appendChild(printStyle);
  });

  await new Promise((r) => setTimeout(r, 500));

  await page.emulateMediaType("screen");

  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "8mm", bottom: "8mm", left: "10mm", right: "10mm" },
  });

  await page.close();
  console.log(`Generated: ${outputPath}`);
}

try {
  await generatePDF("light", "public/cv-light.pdf");
  await generatePDF("dark", "public/cv-dark.pdf");
  console.log("Done!");
} catch (err) {
  console.error("Error:", err);
} finally {
  await browser.close();
}
