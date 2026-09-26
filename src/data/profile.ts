// Site copy. Source of truth: ../claude-note/blair (resume-current.md,
// linkedin-ris-entry.md, linkedin-about-draft.md, profile.md).
// Do not add career facts that aren't in those files.

export const links = {
  github: "https://github.com/Kaninboy",
  linkedin: "https://www.linkedin.com/in/kanin-sukittivarapunt",
  email: "kanin.suk@outlook.com",
  resume:
    "https://kanin-portfolio-website.s3.ap-southeast-1.amazonaws.com/CV_Kanin.pdf",
};

export const hero = {
  name: "Kanin Sukittivarapunt",
  nickname: "New",
  tagline: "System Analyst at RIS Central Group",
  interests: "System Analysis · Integration · Product · Applied AI",
};

export const about = [
  "Hi, I'm Kanin (New), a System Analyst at RIS Central Group. I translate business requirements into API specifications, data models, and integration designs. I enjoy turning complex business problems into clear plans that engineering teams can build from.",
  "My work spans marketplace integrations, backend modernization, and a group-wide HRMS replacement serving over 60,000 employees. As the sole System Analyst on Luna, I owned specifications for nine integration services now handling 500,000–1 million daily transactions in production.",
  "Previously, I worked in full-stack development at KPMG, software QA at Salary Hero, and product growth at Tokenomist. These experiences help me connect user needs, technical details, and product data when defining requirements and evaluating solutions.",
  "I use AI to support requirements analysis, technical documentation, and knowledge organization at work. In daily life, I use it to organize investment research, develop content ideas, plan my learning, and track personal projects.",
];

export const contactLine =
  "Happy to connect with people working in system analysis, product development, and applied AI.";

export type SubProject = {
  name: string;
  period: string;
  bullets: string[];
};

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets?: string[];
  projects?: SubProject[];
};

export const experience: Role[] = [
  {
    company: "RIS Central Group",
    title: "System Analyst",
    period: "Jul 2025 – Present",
    location: "Bangkok",
    projects: [
      {
        name: "HRMS Replacement — Core HR Data Model & Integration",
        period: "Feb 2026 – Present",
        bullets: [
          "System Analyst on a group-wide HRMS replacement serving more than 60,000 employees; own Foundation Objects, Employee Central database design and all integration interfaces",
          "Gathered the as-is data model and integration requirements directly from SAP SuccessFactors administrators and HR domain experts",
          "Designed the target PostgreSQL data model and per-table data dictionary — over 130 tables across three schemas — from gap analysis against the as-is HR schema",
          "Cataloged around 150 integration interfaces across 11 systems and analyzed nearly 100 batch specifications covering over 1,400 field definitions, now mapping to target tables",
        ],
      },
      {
        name: "Luna — MuleSoft Replacement (Custom Backend)",
        period: "Oct 2025 – Apr 2026",
        bullets: [
          "Sole System Analyst on Luna, the custom-backend track of Central's MuleSoft replacement program",
          "Owned 100% of specification and documentation for 9 integration services, built as Nest.js microservices on Azure Kubernetes Service",
          "All 9 services live in production, sustaining 500K–1M transactions daily and clearing the way to retire the MuleSoft license",
          "Specified integrations across REST/JSON, SOAP, Oracle AQ JMS and SFTP batch, with AES-256/RSA-2048 credential injection and RS256 JWS signing for regulated flows",
        ],
      },
      {
        name: "PMP — Marketplace Adapter Platform",
        period: "Jul 2025 – Oct 2025",
        bullets: [
          "Documented end-to-end architecture for PMP, an adapter platform syncing product, stock, price, promotion and order data across 7 marketplace platforms",
          "Cut impact analysis and spec design from a day of code-reading to minutes per flow, replacing tribal knowledge with a single source of truth",
          "Designed RTS decommission migration specs for 3 sub-flows with a Senior SA, enabling infrastructure scale-down that saved six-figure THB annually",
        ],
      },
    ],
  },
  {
    company: "Tokenomist",
    title: "Product Growth Intern (Product Owner and Growth Specialist)",
    period: "Mar 2025 – May 2025",
    location: "Bangkok",
    bullets: [
      "Drove feature enhancement by analyzing Mixpanel user behavior, leading to a flow change that increased user access",
      "Built 6 comprehensive Mixpanel dashboards tracking feature engagement, user retention, and monetization metrics",
      "Designed 24 test scenarios for 4 new features, ensuring alignment between product requirements and implementation",
      "Identified 142 high-potential paid users from a base of 4,167, informing targeted outreach for monetization strategies",
    ],
  },
  {
    company: "Salary Hero",
    title: "Software QA Engineer Intern",
    period: "Sep 2024 – Feb 2025",
    location: "Bangkok",
    bullets: [
      "Conducted manual and exploratory testing for 15+ mobile app features, ensuring seamless user experience",
      "Created 30+ UAT test cases and conducted 4 UAT sessions to validate system functionality",
      "Refactored 40 Playwright test cases, improving automation stability and reducing test failures",
      "Developed load testing scripts in k6 to assess admin console performance under various conditions",
    ],
  },
  {
    company: "KPMG Thailand",
    title: "Full Stack Developer Intern — Technology Consulting",
    period: "May 2024 – Jul 2024",
    location: "Bangkok",
    bullets: [
      "Gathered business requirements by interviewing internal stakeholders from the Data Analytics Team",
      "Developed a Next.js full stack application with Prisma and Azure SQL Database to replace Excel-based project assessment tasks, enabling historical data tracking and reducing team workload",
    ],
  },
];

export type Project = {
  name: string;
  context: string;
  period: string;
  roles: string;
  bullets: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    name: "NOAH English",
    context: "Senior Project",
    period: "Aug 2024 – May 2025",
    roles: "Backend Developer, LLM Engineer",
    bullets: [
      "Built a GPT-4o-based IELTS platform with auto-generated exam modules for learners and tutors",
      "Developed backend features including user account management and dynamic question bank APIs using Go",
      "Created question generation pipelines with OpenAI API, AWS Lambda, and Google Cloud TTS for multimodal content",
      "Led usability testing with 12 users, achieving a strong 9/10 Net Promoter Score",
    ],
    tech: ["Go", "Echo", "PostgreSQL", "MongoDB", "AWS", "OpenAI API", "Python", "TypeScript"],
  },
  {
    name: "WhereNext",
    context: "University Capstone",
    period: "Jan 2024 – May 2024",
    roles: "Backend Developer, DevOps Engineer",
    bullets: [
      "Developed backend system for a schedule management application using Go with Gin and GORM",
      "Deployed the application and MySQL database on a Linux VM using DigitalOcean",
      "Implemented a CI/CD pipeline using GitHub Actions integrated with Docker",
      "Designed database structure with ER diagrams, schema documentation, and data dictionaries",
    ],
    tech: ["Go", "Gin", "GORM", "MySQL", "Linux", "Docker", "GitHub Actions", "DigitalOcean"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "System Analysis & Design",
    items: ["Requirements Gathering", "Data Modeling", "Data Mapping", "ERD", "API Design", "PlantUML"],
  },
  {
    group: "Technical Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Go", "Python", "SQL"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Microsoft SQL Server", "Oracle"],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "Jira", "Confluence", "Docker", "Linux", "Azure", "AWS", "Figma", "Postman", "ELK", "Claude"],
  },
  {
    group: "Languages",
    items: ["Thai (Native)", "English (IELTS 6.5)"],
  },
];

export const education = {
  school: "Chulalongkorn University",
  degree: "Bachelor of Engineering (International Program)",
  major: "Information and Communication Engineering (ICE)",
  gpax: "3.68",
  period: "Aug 2021 – May 2025",
  scholarship:
    "Thai Beverage Special Case Scholarships – White Elephant Program (2023, 2024 Recipient)",
};

export const awards: { name: string; detail: string; date: string }[] = [
  { name: "Chulalongkorn Case Discovery 2025", detail: "", date: "Mar 2025" },
  { name: "Finalist — UNI HACK 2023", detail: "Sustainable waste-reduction stock management for SME restaurants", date: "Nov 2023" },
  { name: "Beat the Biz 2023", detail: "SME food/dessert business plan", date: "Aug 2023" },
  { name: "Finalist — LINE HACK 2023", detail: "Personal training web app on the LINE Platform (React, LIFF)", date: "Feb 2023" },
  { name: "CHARM Case Competition", detail: "CU Co-op competitive strategy", date: "Aug 2022" },
  { name: "Finalist — InnoFunding & InnoCrowding x NITAD18", detail: "AI+IT factory infrastructure pitch", date: "Mar 2022" },
];

export const certifications: { name: string; issuer: string; date: string }[] = [
  { name: "Microsoft Certified: Azure Data Fundamentals (DP-900)", issuer: "Microsoft", date: "Jun 2024" },
  { name: "Claude 101", issuer: "Anthropic", date: "Mar 2026" },
  { name: "Design and Develop a Website using Figma and CSS", issuer: "Coursera", date: "Aug 2024" },
  { name: "Create a Digital Wireframe with Figma", issuer: "Coursera", date: "Aug 2024" },
  { name: "Developing Innovative Ideas for New Companies", issuer: "University of Maryland / Coursera", date: "Apr 2024" },
  { name: "Excel Basics for Data Analysis", issuer: "IBM / Coursera", date: "Feb 2024" },
  { name: "Introduction to Data Analytics", issuer: "IBM / Coursera", date: "Jan 2024" },
  { name: "Introduction to Agile Development and Scrum", issuer: "IBM / Coursera", date: "Jan 2024" },
  { name: "Intro to Data Analytics and Big Data", issuer: "Chulalongkorn University", date: "Jun 2022" },
];
