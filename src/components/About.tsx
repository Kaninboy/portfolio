import Section from "@/components/Section";
import { about } from "@/data/profile";

export default function About() {
  const [lead, ...rest] = about;
  return (
    <Section id="about" index="01" title="About">
      <div
        data-reveal
        className="glass flex flex-col gap-5 rounded-[28px] p-7 md:p-11"
      >
        <p className="max-w-[60ch] text-[clamp(19px,2vw,24px)] leading-snug tracking-[-0.02em] text-fg">
          {lead}
        </p>
        {rest.map((p) => (
          <p key={p} className="max-w-[70ch] text-base leading-[1.7] text-muted">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
