// ─── Icon key type ────────────────────────────────────────────────────────────
// String identifiers resolved to Lucide components via src/lib/icons.tsx
export type IconKey =
  | "github"
  | "linkedin"
  | "mail"
  | "briefcase"
  | "graduation-cap"
  | "languages"
  | "code"
  | "menu"
  | "x"
  | "download";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialItem {
  icon: IconKey;
  href: string;
  label: string;
}

export interface EmploymentItem {
  position: string;
  company: string;
  duration: string;
  description: string;
}

export interface EducationItem {
  course: string;
  school: string;
  duration: string;
  info: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface CVDownload {
  label: string;
  href: string;
}

// ─── Content ──────────────────────────────────────────────────────────────────

export const cv = {
  // Personal
  name: "MJ Eng",
  tagline: "Fullstack .NET Student · Chas Academy",
  locationFrom: "MY",   // ISO 3166-1 alpha-2 flag code
  locationBased: "SE",
  copyrightYear: 2025,
  copyrightName: "MJ (Yen) Eng",
  profileImageAlt: "MJ Eng",

  // Navigation
  navLinks: [
    { label: "About",    href: "#about" },
    { label: "Resume",   href: "#resume" },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact" },
  ] as NavItem[],

  // Social links — single source used by Hero, Contact, and Footer
  socialLinks: [
    { icon: "github"   as IconKey, href: "https://github.com/MJ-esy",              label: "GitHub"   },
    { icon: "linkedin" as IconKey, href: "https://www.linkedin.com/in/mj-yen-eng", label: "LinkedIn" },
    { icon: "mail"     as IconKey, href: "mailto:mj.eng.contact@gmail.com",               label: "Email"    },
  ] as SocialItem[],

  // About paragraphs — add/edit text here, layout is untouched
  aboutParagraphs: [
    "👋 Hi! I'm a Fullstack .NET student at Chas Academy with a passion for coding, problem-solving, and continuous learning.",
    "I started programming in 2023 through a Code Institute challenge and quickly fell in love with building apps and debugging complex issues especially on Windows (without breaking anything!).",
    "Before tech, I worked as a Certified Prosthetist Orthotist, where I solved real-world problems, analyzed data, and collaborated with people daily skills that now strengthen my work as a developer.",
    "Since moving to Sweden, I've embraced new cultures, learned Swedish, and adapted fast—traits that reflect my drive to grow in tech.",
  ] as string[],

  // CV downloads — add a new locale by appending one object here
  cvDownloads: [
    { label: "CV (English)", href: "/MJ_Eng_CV_EN.pdf" },
    { label: "CV (Svenska)", href: "/MJ_Eng_CV_SV.pdf" },
  ] as CVDownload[],

  // Employment history
  employments: [
    {
      position: "Certified Prosthetist Orthotist (Ortopedingenjör)",
      company: "Ottobock Care (earlier: Aktiv Ortopedteknik)",
      duration: "2022–present",
      description: "Specialized in custom footwear and insoles for diabetic and rheumatic patients, focusing on pain relief and alignment adjustments to improve mobility and comfort.",
    },
    {
      position: "Seasonal Worker, Inventory Management",
      company: "Ottobock Care (earlier: Aktiv Ortopedteknik)",
      duration: "Summer 2021",
      description: "Handled incoming packages, ensured timely deliveries for patient appointments, and assisted clinicians during appointments.",
    },
    {
      position: "Substitute Teacher",
      company: "International Engelska Skolan",
      duration: "Autumn 2018",
      description: "Delivering assigned lessons or providing homework support to students, ensuring a productive and positive learning environment.",
    },
    {
      position: "Warehouse Staff",
      company: "Lernia",
      duration: "2018–2019",
      description: "Worked in a fast-paced environment, ensuring products were packed and shipped on time to meet delivery schedules.",
    },
  ] as EmploymentItem[],

  // Education
  education: [
    { course: "Fullstack .NET Developer",   school: "Chas Academy",         duration: "2024–present", info: "C#, .NET, React, SQL, Azure" },
    { course: "Prosthetics and Orthotics",  school: "Jönköping University", duration: "2019–2022",    info: "Biomechanics, Prosthetics, Orthotics" },
    { course: "Komvux",                     school: "Distance",              duration: "",             info: "Physics 2, Programming 1, Swedish as a second language" },
    { course: "International Baccalaureate",school: "S:t Eskils Gymnasium",  duration: "2015–2018",   info: "Chemistry HL, Biology HL, Mathematics HL, Economics SL, English A SL, Swedish B SL & Theory of Knowledge" },
    { course: "Introduction Programme",     school: "Prins Wilhem Gymnasium",duration: "2014–2015",   info: "Focused on Swedish language" },
  ] as EducationItem[],

  // Languages
  languages: [
    { language: "English",  proficiency: "Fluent"         },
    { language: "Swedish",  proficiency: "Professional"   },
    { language: "Mandarin", proficiency: "Native"         },
    { language: "Malay",    proficiency: "Conversational" },
  ] as LanguageItem[],

  // Skills
  skills: ["C#", "HTML", "CSS", "JavaScript", "React", "Node.js", "SQL", "Notion", "Git & GitHub & GitLab"] as string[],
};
