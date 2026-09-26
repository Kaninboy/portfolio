import Section from "@/components/Section";
import { experience } from "@/data/profile";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-muted marker:text-dim">
      {items.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div className="flex flex-col gap-3.5">
        {experience.map((role) => (
          <article
            key={role.company}
            data-reveal
            className="glass flex flex-wrap gap-x-8 gap-y-4 rounded-3xl p-6 transition-colors duration-300 hover:border-line-hover md:p-[34px]"
          >
            <div className="flex-none basis-full pt-1 text-[13px] tabular-nums text-dim md:basis-[180px]">
              <p>{role.period}</p>
              <p>{role.location}</p>
            </div>
            <div className="flex min-w-0 flex-1 basis-[360px] flex-col gap-3">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-[21px] font-medium tracking-[-0.02em]">
                  {role.title}
                </h3>
                <span className="text-[15px] text-muted">{role.company}</span>
              </div>

              {role.bullets && <Bullets items={role.bullets} />}

              {role.projects && (
                <div className="mt-1 flex flex-col">
                  {role.projects.map((project) => (
                    <div
                      key={project.name}
                      className="flex flex-col gap-3 border-t border-line-faint py-5 last:pb-0"
                    >
                      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
                        <h4 className="font-medium tracking-[-0.01em] text-soft2">
                          {project.name}
                        </h4>
                        <p className="text-[13px] tabular-nums text-dim md:whitespace-nowrap">
                          {project.period}
                        </p>
                      </div>
                      <Bullets items={project.bullets} />
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
