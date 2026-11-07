import Section from "@/components/Section";
import EmphasizedText from "@/components/EmphasizedText";
import { about, aboutEmphasis } from "@/data/profile";

export default function About() {
  const [lead, ...rest] = about;
  return (
    <Section id="about" index="01" title="About">
      <div
        data-reveal
        className="glass flex flex-col gap-6 rounded-[28px] p-7 md:gap-8 md:p-11"
      >
        <p className="max-w-[60ch] text-[clamp(19px,2vw,24px)] leading-snug tracking-[-0.02em] text-fg">
          <EmphasizedText text={lead} phrases={aboutEmphasis} />
        </p>
        <div className="flex flex-col gap-6 border-t border-line-faint pt-6 md:pt-8">
          {rest.map((p) => (
            <p key={p} className="max-w-[70ch] text-base leading-[1.7] text-muted">
              <EmphasizedText text={p} phrases={aboutEmphasis} />
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
