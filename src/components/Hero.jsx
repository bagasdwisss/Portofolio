import { useEffect, useRef, useState } from 'react'
import ImageWithFallback from './ImageWithFallback.jsx'

const segments = [
  { text: 'output → ', cls: 'text-code-out' },
  { text: '"Fokus: web, ML & sistem internal. ', cls: 'text-code-str' },
  { text: 'Siap membangun sesuatu bersama."', cls: 'text-code-str' },
]

export default function Hero() {
  const [rendered, setRendered] = useState(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setRendered(segments.map((s) => s.text).join(''))
      return
    }

    let segIdx = 0
    let charIdx = 0

    const tick = () => {
      if (segIdx >= segments.length) return
      const seg = segments[segIdx]
      if (charIdx <= seg.text.length) {
        const done = segments.slice(0, segIdx).map((s) => s.text).join('')
        setRendered(done + seg.text.slice(0, charIdx))
        charIdx++
        timeoutRef.current = setTimeout(tick, 18)
      } else {
        segIdx++
        charIdx = 0
        timeoutRef.current = setTimeout(tick, 60)
      }
    }

    timeoutRef.current = setTimeout(tick, 500)
    return () => clearTimeout(timeoutRef.current)
  }, [])

  return (
    <section className="pb-16 pt-20 sm:pt-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3.5">
            <ImageWithFallback
              src="/images/projects/avatar.jpg"
              alt="Foto profil"
              label="NA"
              className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-line"
            />
            <p className="font-mono text-sm text-accent before:text-ink-faint before:content-['$_']">
              whoami
            </p>
          </div>
          <h1 className="mb-3 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            M Bagas Dwi S, <em className="text-accent not-italic">software engineer</em>.
          </h1>
          <p className="mb-5 font-mono text-sm text-ink-soft">
            Full-Stack &amp; ML Developer, Web Developer, Computer Vision, Agentic AI
          </p>
          <p className="mb-8 max-w-[46ch] text-base text-ink-soft">
            Lulusan D3 Teknik Informatika USU. Saya membangun produk digital dari
            sistem internal perusahaan, aplikasi web modern, hingga model machine
            learning — dengan fokus pada kode yang sederhana dan bisa diandalkan.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#projects"
              className="rounded-sm border border-ink bg-ink px-5 py-3 font-mono text-sm text-bg transition-all hover:-translate-y-0.5 hover:border-accent-strong hover:bg-accent-strong"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-ink px-5 py-3 font-mono text-sm transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-bg"
            >
              Hubungi Saya
            </a>
            <a
              href="/cv/CV M Bagas.pdf"
              download
              className="rounded-sm border border-line px-5 py-3 font-mono text-sm text-ink-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-strong"
            >
              Unduh CV ↓
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-term-border bg-term shadow-terminal">
          <div className="flex items-center gap-1.5 border-b border-term-border bg-term-bar px-3.5 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E5645A]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E5B95A]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#58C48A]" />
            <span className="ml-1.5 font-mono text-[11px] text-code-com">profil.sh</span>
          </div>
          <div className="min-h-[190px] p-5 font-mono text-[13px] leading-[1.85]">
            <div>
              <span className="text-prompt">➜</span>{' '}
              <span className="text-code-fg">cat profil.sh</span>
            </div>
            <div className="whitespace-pre-wrap text-code-str">
              {rendered}
              <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-blink bg-prompt align-[-2px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
