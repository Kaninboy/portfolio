import Chips from "@/components/Chips";
import EmphasizedText from "@/components/EmphasizedText";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Section from "@/components/Section";
import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            data-reveal
            className="glass flex min-w-0 flex-col gap-4 rounded-[28px] p-6 md:p-8"
          >
            <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
              <h3 className="min-w-0 text-[22px] font-medium tracking-[-0.02em]">
                {project.name}
              </h3>
              <span className="text-[12.5px] tabular-nums text-dim sm:shrink-0">
                {project.period}
              </span>
            </div>
            <p className="text-[12.5px] uppercase tracking-[0.03em] text-soft">
              {project.context} · {project.roles}
            </p>
            <ul className="mb-3 list-disc space-y-2 pl-5 text-[15px] leading-[1.6] text-muted marker:text-dim">
              {project.bullets.map((b) => (
                <li key={b}><EmphasizedText text={b} phrases={project.emphasis} /></li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-5 border-t border-line-faint pt-5">
              <Chips items={project.tech} />
              {project.source && (
                <a
                  href={project.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.source.accessibleLabel}
                  className="glass-pill inline-flex min-h-11 w-fit max-w-full items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg"
                >
                  {project.source.label}
                  <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4 shrink-0" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
