import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'tentang.md' },
  { href: '#skills', label: 'skills.json' },
  { href: '#certificates', label: 'sertifikat/' },
  { href: '#projects', label: 'proyek/' },
  { href: '#contact', label: 'kontak.sh' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-5 py-4 sm:px-7">
        <a href="#" className="font-mono text-sm font-semibold tracking-wide">
          M Bagas Dwi S<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden gap-6 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="border-b border-transparent pb-0.5 font-mono text-xs text-ink-soft transition-colors hover:border-accent hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
          />
        </button>
      </div>

      {/* Mobile Navigation dengan Framer Motion */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden sm:hidden"
          >
            <ul className="flex flex-col gap-1 border-t border-line px-5 pb-4 pt-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 font-mono text-sm text-ink-soft transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}