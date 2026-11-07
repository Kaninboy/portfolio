import { Fragment } from "react";

// Match only the exact phrases supplied with the copy; the rendered text stays
// identical to the source sentence, including its punctuation and spacing.
export default function EmphasizedText({
  text,
  phrases = [],
}: {
  text: string;
  phrases?: string[];
}) {
  const matches = phrases.filter((phrase) => phrase.length > 0);
  if (matches.length === 0) return <>{text}</>;

  const pattern = new RegExp(
    `(${matches
      .slice()
      .sort((a, b) => b.length - a.length)
      .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
    "g"
  );

  return (
    <>
      {text.split(pattern).map((part, index) => (
        <Fragment key={index}>
          {matches.includes(part) ? (
            <strong className="font-semibold text-fg">{part}</strong>
          ) : (
            part
          )}
        </Fragment>
      ))}
    </>
  );
}
