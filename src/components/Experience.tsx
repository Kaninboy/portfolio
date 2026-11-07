import Section from "@/components/Section";
import EmphasizedText from "@/components/EmphasizedText";
import { experience } from "@/data/profile";

function Bullets({ items, emphasis }: { items: string[]; emphasis?: string[] }) {
  return (
    <ul className="list-disc space-y-3 pl-5 text-base leading-[1.7] text-muted marker:text-dim">
      {items.map((b) => (
        <li key={b}><EmphasizedText text={b} phrases={emphasis} /></li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div className="flex flex-col gap-6">
        {experience.map((role) => (
          <article
            key={role.company}
            data-reveal
            className="glass min-w-0 rounded-3xl p-6 md:p-9"
          >
            <header className="flex flex-col gap-3 border-b border-line-faint pb-6 md:flex-row md:justify-between md:gap-8">
              <div className="min-w-0">
                <h3 className="text-2xl font-medium leading-snug tracking-[-0.02em]">
                  {role.title}
                </h3>
                <p className="mt-2 text-base text-soft">{role.company}</p>
              </div>
              <div className="shrink-0 text-[13px] leading-relaxed tabular-nums text-dim md:pt-1 md:text-right">
                <p>{role.period}</p>
                <p>{role.location}</p>
              </div>
            </header>
            <div className="mt-6 max-w-[75ch]">

              {role.bullets && <Bullets items={role.bullets} emphasis={role.emphasis} />}

              {role.projects && (
                <div className="flex flex-col">
                  {role.projects.map((project) => (
                    <div
                      key={project.name}
                      className="flex flex-col gap-4 border-t border-line-faint py-7 first:border-t-0 first:pt-0 last:pb-0"
                    >
                      <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-semibold leading-snug tracking-[-0.01em] text-fg">
                          {project.name}
                        </h4>
                        <p className="text-[13px] tabular-nums text-dim">
                          {project.period}
                        </p>
                      </div>
                      <Bullets items={project.bullets} emphasis={project.emphasis} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
