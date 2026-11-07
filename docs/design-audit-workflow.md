# Design audit workflow

Every design change in this repository must receive an **Impeccable audit after implementation**. This applies to new designs, refinements, small fixes, responsive changes, theme changes, and UI refactors.

This is a required agent workflow. It does not install automatic hooks or a CI check, and it does not authorize commits, pushes, or deployments.

## 1. Identify scope and preserve the brief

- Identify the affected sections, components, shared styles, content, and interaction paths. Include consumers of shared components in the audit scope.
- Read `AGENTS.md`, the installed Impeccable `SKILL.md`, and the playbook appropriate to the change. Follow the skill's context-loading instructions once per session and use the existing implementation as authority for refinements.
- Respect New's choices: Glass Aurora, Inter, both themes, the fixed hero content and portrait, and complete project, experience, and skill details.
- CV remains the primary action through its solid button. The footer uses the shared social-icon/CV row, wrapping naturally on small screens. Do not interpret CV priority as permission to replace that layout.
- Audit advice does not authorize changing career facts, hiding detail, replacing the visual identity, or expanding the requested scope. Intentional design choices take precedence over aesthetic detector advisories.

Documentation-only changes and changes with no effect on the rendered UI do not require a website audit. If their UI impact is uncertain, audit the affected surface.

## 2. Implement and run project checks

- Complete the requested change, preserving the existing content and behavior outside scope.
- Run `npm run build` and `npm run lint`. Do not build while `next dev` is running; follow the port/server rules in `AGENTS.md`.
- Preview the current local implementation. The deployed site is not evidence for unshipped edits.
- Stop temporary preview servers after verification and restore any temporary browser viewport or theme settings.

## 3. Audit with Impeccable

Use the installed skill's **`audit` playbook** against the final affected surface. In a Codex chat, this is `$impeccable audit <target>`; in other agents, use their supported invocation or read and execute the same installed skill instructions directly. This is an agent command, not an npm script or shell command.

Cover all five audit dimensions:

1. Accessibility: semantics, accessible names, contrast, keyboard order and visible focus, and reduced-motion behavior.
2. Performance: image delivery, new dependencies, rendering work, and motion/filter costs. Distinguish measured problems from risks inferred from code.
3. Theming: token use, theme switching, and the final appearance in both dark and light modes.
4. Responsive design: wrapping, alignment, touch targets, reflow, and horizontal overflow.
5. Implementation integrity: content preservation, working destinations/actions, consistency with the brief, and verified detector findings.

### Detector evidence

Run the bundled detector over the changed UI files and relevant shared dependencies, as directed by the installed skill. Reuse valid hook results when they cover the final edits; do not duplicate an already-current scan. Broaden to `src` when global styling or shared layout changes affect the whole page.

For this Windows checkout, a Codex global installation can be resolved as follows:

```powershell
$codexRoot = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $HOME '.codex' }
$impeccableSkill = Join-Path $codexRoot 'skills/impeccable'
& (Join-Path $impeccableSkill 'scripts/impeccable.cmd') detect --json src
```

Use the active agent's actual skill location if it differs. Inspect the result and exit status: exit 0 means no findings, exit 2 means findings, and other failures are not successful audits. Check each finding in context and record its disposition. Never present a clean static scan as a full Impeccable audit.

### Rendered evidence

- Inspect the affected flow in both themes at **320, 390, 768, 1024, and 1440 CSS pixels**. Check both sides of any changed breakpoint, such as 1023/1024, when relevant.
- Measure document and component overflow. Do not hide overflow globally or truncate real content to make the check pass.
- Check the actual controls affected by the change, including keyboard focus and navigation. For copy/typography changes, check text expansion or zoom/reflow when the available browser supports it.
- Confirm that complete details, dates, lists, and approved copy are still present. For markup-only emphasis changes, compare rendered text with the original strings.
- Capture screenshots of the changed surface in both themes, including a narrow view and a desktop view. Read browser errors and warnings.
- Name the browser/engine and whether evidence used resized viewports, synthesized touch, or physical devices. Viewport simulation alone does not establish touch-gesture behavior or real-phone performance. Report untested hardware honestly without inventing failures.

## 4. Resolve findings and verify the final revision

- Classify verified findings using Impeccable's P0–P3 severity definitions. Keep functional defects separate from aesthetic advisories and false positives.
- Fix regressions introduced by the task and verified issues within its scope. Recheck affected evidence after fixes; earlier results do not cover later UI edits.
- Report pre-existing or out-of-scope findings separately. Do not redesign unrelated sections to improve an audit score.
- Do not mark the design ready while verified blocking regressions remain. Record any remaining lower-priority findings and limitations explicitly.
- If Impeccable is missing, resolve/install the skill through the available skill workflow. If it remains unavailable, or required detector/browser checks fail, continue useful independent checks but mark the Impeccable audit **incomplete**, explain the concrete blocker, and do not claim the design passed.

## 5. Save and report

Write one report per design task at `.impeccable/audits/YYYY-MM-DD-<task>.md`, with screenshots and raw detector output in an adjacent task folder. Reference the final revision being assessed, including uncommitted changes when applicable.

The report must contain:

- Date, branch, base commit, affected files/surfaces, and the Impeccable version or skill location used.
- A 0–4 score for each of the five dimensions and the total out of 20, following the installed audit playbook. Scores reflect the evidence actually gathered; disclose any incomplete dimension.
- P0/P1/P2/P3 counts, verified findings with file locations and impact, dispositions of detector advisories/false positives, and remaining issues.
- A viewport/theme checklist, screenshots, interaction/focus checks, content-preservation checks, and browser-log results.
- Build/lint results, detector command and result, evidence links, and explicit limitations or skipped checks. Mark a dimension not applicable only with a concrete reason; never silently award it a passing score.

The completion message must summarize the audit outcome, remaining issues, and build/lint results, and link the report. Include a screenshot when showing the visual change. Do not claim automatic enforcement, full WCAG conformance, or physical-device performance from a manual audit or static scan.

Only commit or push when New explicitly requests it. Documentation and audit artifacts follow the same rule.
