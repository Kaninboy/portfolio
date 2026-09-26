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
      <div data-reveal className="glass rounded-[28px] px-5 py-2 md:px-8">
        {rows.map((row) => (
          <div
            key={row.name}
            className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-line-faint py-5 last:border-b-0"
          >
            <span className="flex-1 basis-[280px] text-[17px] font-medium tracking-[-0.015em]">
              {row.name}
            </span>
            {row.meta && (
              <span className="flex-initial basis-[260px] text-[15px] text-muted">
                {row.meta}
              </span>
            )}
            <span className="flex-none text-[13px] tabular-nums text-dim md:w-[72px] md:text-right">
              {row.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <Section id="education" index="05" title="Education & Awards">
      <article
        data-reveal
        className="glass flex flex-wrap gap-x-8 gap-y-4 rounded-3xl p-6 md:p-[34px]"
      >
        <div className="flex-none basis-full pt-1 text-[13px] tabular-nums text-dim md:basis-[180px]">
          {education.period}
        </div>
        <div className="flex min-w-0 flex-1 basis-[360px] flex-col gap-2">
          <h3 className="text-[21px] font-medium tracking-[-0.02em]">
            {education.school}
          </h3>
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

      <div className="mt-14 flex flex-col gap-14">
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
