export interface Skill {
  name: string;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
}

export const profile = {
  name: "Georgi Todorov",
  title: "Senior Front-end Developer",
  email: "g.todorov92@gmail.com",
  intro:
    "Front-end developer with nearly a decade of professional experience building modern web applications. Experienced across the React, Angular, and Vue ecosystems, with a strong focus on performance, accessibility, and maintainable code. I care about translating thoughtful design into fast, intuitive user experiences and enjoy collaborating with cross-functional teams to deliver reliable, high-quality products.",
  photo: "/photo.png",
  cvUrl: "/Georgi Todorov CV.pdf",
  socials: {
    github: "https://github.com/GeorgiSTodorov",
    linkedin: "https://www.linkedin.com/in/georgi-todorov-14092b199/",
  },
  technicalSkills: [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript (ES6+)", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Vue", icon: "vue" },
    { name: "Nuxt", icon: "nuxt" },
    { name: "Angular", icon: "angular" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Vite", icon: "vite" },
    { name: "git", icon: "git" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "shadcn/ui", icon: "shadcn" },
    { name: "Storybook", icon: "storybook" },
    { name: "Figma", icon: "figma" },
    { name: "JIRA", icon: "jira" },
    { name: "REST APIs", icon: "api" },
    { name: "Automated Testing", icon: "automatedTesting" },
    { name: "AI-Assisted Development", icon: "aiDev" },
  ] satisfies Skill[],
  personalSkills: [
    { name: "Communication", icon: "communication" },
    { name: "Attention to Detail", icon: "eye" },
    { name: "Problem Solving", icon: "lightbulb" },
    { name: "Teamwork", icon: "teamwork" },
    { name: "Time Management", icon: "clock" },
    { name: "Adaptability", icon: "adaptability" },
  ] satisfies Skill[],
  interests: [
    { name: "Responsive Design", icon: "responsive" },
    { name: "UX", icon: "ux" },
    { name: "Accessibility", icon: "accessibility" },
    { name: "Design Systems", icon: "designSystems" },
    { name: "Performance", icon: "performance" },
    { name: "Open Source", icon: "openSource" },
  ] satisfies Skill[],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "German", level: "Fluent" },
    { name: "Bulgarian", level: "Native" },
  ] satisfies Language[],
  experience: [
    {
      role: "Senior Front-end Developer",
      company: "Lab08",
      companyUrl: "https://lab08.com",
      period: "June 2020 - March 2026",
      description: [
        "Worked with Angular, React, and Vue across multiple successful projects — both greenfield and existing codebases. Built and documented UI components with Storybook, monitored production quality with Sentry, and collaborated effectively within front-end teams as well as delivering features independently.",
      ],
    },
    {
      role: "Front-end Developer",
      company: "Haemimont AD",
      companyUrl: "https://haemimont.com",
      period: "July 2017 - June 2020",
      description: [
        "Worked with modern stack like React and Angular as well as legacy libraries like jQuery. Involved in the full development cycle — from design through implementation to manual and automated testing.",
      ],
    },
  ] satisfies Experience[],
  education: [
    {
      school: "RWTH Aachen University, Germany",
      degree: "Informatics",
      period: "2011 — 2017",
    },
    {
      school: "Baba Tonka High School of Mathematics, Ruse",
      degree: "Informatics",
      period: "2006 — 2011",
    }
  ] satisfies Education[],
};
