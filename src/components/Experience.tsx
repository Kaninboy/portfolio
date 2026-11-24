import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Bullets from "@/components/Bullets";
import ProjectTabs from "@/components/ProjectTabs";
import Section from "@/components/Section";
import { experience } from "@/data/profile";

// Roles with sub-projects get a full card with project tabs; earlier roles are
// collapsible rows (native <details>, so they work without JS and expand for
// find-in-page). Every bullet stays in the page.
export default function Experience() {
  const featured = experience.filter((role) => role.projects);
  const earlier = experience.filter((role) => !role.projects);

  return (
    <Section id="experience" index="02" title="Experience">
      <div className="flex flex-col gap-6">
        {featured.map((role) => (
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
            <div className="mt-6">
              <ProjectTabs projects={role.projects!} label={`${role.company} projects`} />
            </div>
          </article>
        ))}
      </div>

      {earlier.length > 0 && (
        <div className="mt-10">
          <h3 data-reveal className="mb-4 text-xs uppercase tracking-[0.06em] text-dim">
            Earlier roles
          </h3>
          <div data-reveal className="glass rounded-[28px] px-5 md:px-8">
            {earlier.map((role) => (
              <details
                key={role.company}
                className="group border-b border-line-faint last:border-b-0"
              >
                <summary className="-mx-2 flex min-h-11 cursor-pointer list-none items-start gap-4 rounded-xl px-2 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-fg [&::-webkit-details-marker]:hidden">
                  <div className="grid min-w-0 flex-1 gap-x-6 gap-y-1 sm:grid-cols-[minmax(0,1fr)_auto]">
                    <div className="min-w-0">
                      <h4 className="text-lg font-medium leading-snug tracking-[-0.015em] text-fg">
                        {role.title}
                      </h4>
                      <p className="mt-1 text-[15px] text-soft">{role.company}</p>
                    </div>
                    <p className="text-[13px] leading-relaxed tabular-nums text-dim sm:pt-1 sm:text-right">
                      {role.period}
                      <span className="sm:hidden"> · </span>
                      <span className="sm:block">{role.location}</span>
                    </p>
                  </div>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-dim motion-safe:transition-transform motion-safe:duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="max-w-[75ch] pb-6 sm:pr-9">
                  {role.bullets && <Bullets items={role.bullets} emphasis={role.emphasis} />}
                </div>
              </details>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
