import Chips from "@/components/Chips";
import Section from "@/components/Section";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <dl
        data-reveal
        className="glass rounded-[28px] px-6 py-2 md:px-8"
      >
        {skills.map(({ group, items }) => (
          <div
            key={group}
            className="flex flex-col gap-3 border-b border-line-faint py-6 last:border-b-0 md:flex-row md:gap-8"
          >
            <dt className="flex-none pt-1.5 text-xs uppercase tracking-[0.06em] text-dim md:w-[220px]">
              {group}
            </dt>
            <dd className="flex-1">
              <Chips items={items} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
