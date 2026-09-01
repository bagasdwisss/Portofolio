export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line py-8 text-center font-mono text-xs text-ink-faint">
      © {year} M Bagas Dwi S. Dibuat dengan React, Vite &amp; Tailwind CSS.
    </footer>
  )
}
