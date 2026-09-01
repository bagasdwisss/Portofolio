import skillGroups from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-16">
      <div className="mb-9 flex items-baseline gap-2.5">
        <span className="font-mono text-xs text-ink-faint">02</span>
        <h2 className="font-display text-2xl font-semibold">Keahlian</h2>
        <span className="ml-auto font-mono text-xs text-accent">skills.json</span>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label} className="rounded-md border border-line bg-panel p-5">
            <h3 className="mb-3.5 font-mono text-xs text-ink-soft before:text-ink-faint before:content-['//_']">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="rounded bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent-strong"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
