export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-16">
      <div className="mb-9 flex items-baseline gap-2.5">
        <span className="font-mono text-xs text-ink-faint">05</span>
        <h2 className="font-display text-2xl font-semibold">Kontak</h2>
        <span className="ml-auto font-mono text-xs text-accent">kontak.sh</span>
      </div>
      <div className="max-w-[560px] rounded-lg bg-term p-6 font-mono text-sm leading-[2] text-code-fg">
        <div>
          <span className="text-code-key">EMAIL</span>=
          <span className="text-code-str">"</span>
          <a href="mailto:mbagasdwiss@email.com" className="text-prompt hover:underline">
            mbagasdwiss@email.com
          </a>
          <span className="text-code-str">"</span>
        </div>
        <div>
          <span className="text-code-key">GITHUB</span>=
          <span className="text-code-str">"</span>
          <a href="https://github.com/bagasdwisss" target="_blank" rel="noopener noreferrer" className="text-prompt hover:underline">
            github.com/bagasdwiss
          </a>
          <span className="text-code-str">"</span>
        </div>
        <div>
          <span className="text-code-key">LINKEDIN</span>=
          <span className="text-code-str">"</span>
          <a href="https://www.linkedin.com/in/m-bagas-dwi-s-60618a42a/" target="_blank" rel="noopener noreferrer" className="text-prompt hover:underline">
            linkedin.com/in/mbagasdwis
          </a>
          <span className="text-code-str">"</span>
        </div>
      </div>
      <p className="mt-5 max-w-[50ch] text-sm text-ink-soft">
        Terbuka untuk peluang kerja, kolaborasi proyek, atau sekadar ngobrol soal teknologi.
      </p>
    </section>
  )
}
