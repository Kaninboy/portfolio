import Section from "@/components/Section";
import { awards, certifications, education } from "@/data/profile";

function RowList({
  id,
  title,
  rows,
}: {
  id?: string;
  title: string;
  rows: { name: string; meta: string; date: string }[];
}) {
  return (
    <div id={id} className="scroll-mt-20">
      <h3
        data-reveal
        className="mb-4 text-xs uppercase tracking-[0.06em] text-dim"
      >
        {title}
      </h3>
      <ul data-reveal className="glass rounded-[28px] px-5 py-2 md:px-8">
        {rows.map((row) => (
          <li
            key={row.name}
            className="grid gap-x-6 gap-y-1 border-b border-line-faint py-4 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_5rem] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_5rem]"
          >
            <span className="min-w-0 text-base font-medium leading-relaxed tracking-[-0.015em]">
              {row.name}
            </span>
            {row.meta && (
              <span className="min-w-0 text-sm leading-relaxed text-muted sm:col-start-1 lg:col-start-2 lg:row-start-1">
                {row.meta}
              </span>
            )}
            <span className="text-[13px] leading-relaxed tabular-nums text-dim sm:col-start-2 sm:row-start-1 sm:pt-0.5 sm:text-right lg:col-start-3">
              {row.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Education() {
  return (
    <Section id="education" index="05" title="Education & Awards" spacing="supporting">
      <article
        data-reveal
        className="glass min-w-0 rounded-3xl p-6 md:p-8"
      >
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-6">
          <h3 className="text-[21px] font-medium tracking-[-0.02em]">
            {education.school}
          </h3>
          <p className="shrink-0 text-[13px] tabular-nums text-dim md:pt-1">
            {education.period}
          </p>
        </div>
        <div className="mt-4 flex max-w-[75ch] flex-col gap-2">
          <p className="text-[15px] text-soft">{education.degree}</p>
          <p className="text-[15px] text-muted">
            Major: {education.major} · GPAX {education.gpax}
          </p>
          <p className="mt-2 text-[15px] leading-[1.65] text-muted">
            <span className="text-soft2">Scholarship: </span>
            {education.scholarship}
          </p>
        </div>
      </article>

      <div className="mt-10 flex flex-col gap-10">
        <RowList
          title="Honors & Awards"
          rows={awards.map((a) => ({ name: a.name, meta: a.detail, date: a.date }))}
        />
        <RowList
          id="certifications"
          title="Certifications"
          rows={certifications.map((c) => ({ name: c.name, meta: c.issuer, date: c.date }))}
        />
      </div>
    </Section>
  );
}
