import { education, experience, hero, links } from "@/data/profile";

export const siteUrl = "https://kaninboy.vercel.app";

const current = experience[0];

export const siteTitle = `${hero.name} — ${current.title}`;

export const siteDescription =
  "Kanin (New) Sukittivarapunt, System Analyst at RIS Central Group. I translate business requirements into API specifications, data models, and integration designs.";

// schema.org Person for search engines. Built from profile.ts so it never drifts from the page.
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: hero.name,
  alternateName: hero.nickname,
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  jobTitle: current.title,
  worksFor: { "@type": "Organization", name: current.company },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  sameAs: [links.linkedin, links.github],
};
