import Image from "next/image";
import { profile } from "@/data/profile";
import { TechIcon } from "@/components/icons/TechIcons";
import { PersonalIcon } from "@/components/icons/PersonalIcons";
import { InterestIcon } from "@/components/icons/InterestIcons";
import ThemeToggle from "@/components/ThemeToggle";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col px-6">
      {/* Header */}
      <header className="flex items-center justify-between py-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-1 text-sm text-foreground/50">{profile.title}</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-foreground/30 transition-all hover:text-accent hover:drop-shadow-[0_0_8px_var(--accent)]"
          >
            <EmailIcon />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground/30 transition-all hover:text-accent hover:drop-shadow-[0_0_8px_var(--accent)]"
          >
            <GithubIcon />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/30 transition-all hover:text-accent hover:drop-shadow-[0_0_8px_var(--accent)]"
          >
            <LinkedInIcon />
          </a>
          <ThemeToggle />
        </div>
      </header>

      {/* Body */}
      <div className="flex-1 pb-16">
        <main className="space-y-10">
          {/* Two-column layout */}
          <div className="flex gap-10 max-lg:flex-col animate-in delay-1">
            {/* Main: Intro, Experience, Education */}
            <div className="flex flex-col gap-24 lg:basis-3/5 lg:grow">
              {/* Intro */}
              <section className="glass-card">
                <div className="flex gap-6 max-sm:flex-col max-sm:items-center">
                  <div className="shrink-0 flex flex-col justify-between">
                    <Image
                      src={profile.photo}
                      alt={profile.name}
                      width={160}
                      height={160}
                      className="profile-photo rounded-full object-cover"
                      priority
                    />
                    <div className="mt-4">
                      <a href={profile.cvUrl} download className="download-btn">
                        <DownloadIcon />
                        Download CV
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between max-sm:text-center">
                    <p className="leading-relaxed text-foreground/70">
                      {profile.intro}
                    </p>
                  </div>
                </div>
              </section>
              {/* Experience */}
              <section className="glass-card">
                <h2 className="mb-6 text-lg font-semibold tracking-tight">
                  Experience
                </h2>
                <div className="space-y-8">
                  {profile.experience.map((job) => (
                    <div key={`${job.company}-${job.role}`} className="timeline-item">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                        <h3 className="font-medium">
                          {job.role}{" "}
                          <span className="text-foreground/40">
                            @{" "}
                            {job.companyUrl ? (
                              <a
                                href={job.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 transition-colors hover:text-accent"
                              >
                                {job.company}
                              </a>
                            ) : (
                              job.company
                            )}
                          </span>
                        </h3>
                        <span className="shrink-0 text-sm text-foreground/40">
                          {job.period}
                        </span>
                      </div>
                      <div className="mt-2 space-y-1 text-sm leading-relaxed text-foreground/60">
                        {job.description.map((item, i) => (
                          <p key={i}>{item}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="glass-card">
                <h2 className="mb-6 text-lg font-semibold tracking-tight">
                  Education
                </h2>
                <div className="space-y-4">
                  {profile.education.map((edu) => (
                    <div key={`${edu.school}-${edu.degree}`} className="timeline-item">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                        <h3 className="font-medium">{edu.school}</h3>
                        <span className="shrink-0 text-sm text-foreground/40">
                          {edu.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-foreground/50">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar: Skills, Interests, Languages */}
            <div className="flex flex-col gap-5 text-xs lg:basis-2/5 lg:shrink-0">
              {/* Technical Skills */}
              <section className="glass-card-sm">
                <h2 className="mb-4 text-base font-semibold tracking-tight">
                  Technical Skills
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {profile.technicalSkills.map((skill) => (
                    <span key={skill.name} className="glow-pill">
                      <TechIcon name={skill.icon} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>

              {/* Personal Skills */}
              <section className="glass-card-sm">
                <h2 className="mb-4 text-base font-semibold tracking-tight">
                  Personal Skills
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {profile.personalSkills.map((skill) => (
                    <span key={skill.name} className="glow-pill">
                      <PersonalIcon name={skill.icon} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>

              {/* Interests */}
              <section className="glass-card-sm">
                <h2 className="mb-4 text-base font-semibold tracking-tight">
                  Interests
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {profile.interests.map((interest) => (
                    <span key={interest.name} className="glow-pill">
                      <InterestIcon name={interest.icon} />
                      {interest.name}
                    </span>
                  ))}
                </div>
              </section>

              {/* Languages */}
              <section className="glass-card-sm">
                <h2 className="mb-4 text-base font-semibold tracking-tight">
                  Languages
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {profile.languages.map((lang) => (
                    <span key={lang.name} className="glow-pill">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-foreground/40">·</span>
                      <span className="text-foreground/50">{lang.level}</span>
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>


      {/* Footer */}
      <footer className="border-t border-foreground/5 py-8 text-center text-sm text-foreground/30">
        &copy; {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
