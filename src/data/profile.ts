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
  title: "Senior Frontend Developer",
  email: "g.todorov92@gmail.com",
  intro:
    "Frontend developer with nearly a decade of professional experience building web applications. I've worked across the React, Angular, and Vue ecosystems and care deeply about performance, accessibility, and delivering a great user experience through thoughtful design and clean code.",
  photo: "/photo.png",
  cvUrl: "/cv.pdf",
  socials: {
    github: "https://github.com/GeorgiSTodorov",
    linkedin: "https://www.linkedin.com/in/georgi-todorov-14092b199/",
  },
  technicalSkills: [
    { name: "React", icon: "react" },
    { name: "Angular", icon: "angular" },
    { name: "Vue", icon: "vue" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Next.js", icon: "nextjs" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "shadcn/ui", icon: "shadcn" },
    { name: "Git", icon: "git" },
    { name: "Vite", icon: "vite" },
    { name: "Storybook", icon: "storybook" },
    { name: "JIRA", icon: "jira" },
    { name: "REST APIs", icon: "api" },
    { name: "Automated Testing", icon: "automatedTesting" },
    { name: "AI-Assisted Development", icon: "aiDev" },
    { name: "Figma", icon: "figma" },
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
      role: "Senior Frontend Developer",
      company: "Lab08",
      companyUrl: "https://lab08.com",
      period: "June 2020 - March 2026",
      description: [
        "Worked with Angular, React, and Vue across multiple successful projects — both greenfield and existing codebases.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Haemimont AD",
      companyUrl: "https://haemimont.com",
      period: "July 2017 - June 2020",
      description: [
        "Worked with modern frameworks like React and Angular as well as legacy technologies like jQuery.",
        "Involved in the full development cycle — from design through implementation to manual and automated testing.",
      ],
    },
  ] satisfies Experience[],
  education: [
    {
      degree: "B.Sc. Informatics, RWTH Aachen University",
      school: "",
      period: "2011 — 2017",
    },
    {
      degree: "Baba Tonka High School of Mathematics, Ruse",
      school: "",
      period: "2006 — 2011",
    }
  ] satisfies Education[],
};
