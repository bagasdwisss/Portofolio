import projects from '../data/projects.js'
import ProjectGallery from './ProjectGallery.jsx'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-16">
      <div className="mb-9 flex items-baseline gap-2.5">
        <span className="font-mono text-xs text-ink-faint">04</span>
        <h2 className="font-display text-2xl font-semibold">Proyek</h2>
        <span className="ml-auto font-mono text-xs text-accent">proyek/</span>
      </div>
      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <article
            key={p.file}
            className="overflow-hidden rounded-md border border-line bg-panel transition-all hover:-translate-y-0.5 hover:border-accent"
          >
            <ProjectGallery images={p.images} title={p.title} />
            <div className="grid grid-cols-1 gap-3.5 p-6 sm:grid-cols-[1fr_auto]">
              <div className="min-w-0 w-full">
                <p className="mb-1.5 font-mono text-xs text-ink-faint">{p.file}</p>
                <h3 className="mb-1 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mb-2 font-mono text-xs text-accent">{p.role}</p>
                <p className="mb-3.5 w-full text-sm text-ink-soft">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line px-2 py-1 font-mono text-xs text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {p.links.length > 0 && (
                <div className="flex flex-row gap-2 self-start sm:flex-col sm:text-right">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-nowrap border-b border-accent-soft font-mono text-xs text-accent-strong hover:border-accent"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
