import Chips from "@/components/Chips";
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
            className="glass flex min-w-0 flex-col gap-3 rounded-[28px] p-6 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-[color:var(--ln-022)] md:p-8"
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
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-auto">
              <Chips items={project.tech} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
