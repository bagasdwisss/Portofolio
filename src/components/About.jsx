import { Fragment } from 'react'

const paragraphs = [
  'Saya seorang programmer lulusan D3 Teknik Informatika Universitas Sumatera Utara, dengan pengalaman lintas bidang: web development, sistem internal perusahaan, hingga machine learning dan computer vision.',
  'Pengalaman magang di Divisi Operasional PT Bank Sumut dan Divisi IT BPJS Ketenagakerjaan membentuk cara saya membangun sistem mengutamakan kejelasan alur data dan kemudahan dirawat oleh tim.',
  'Di luar itu saya juga mengeksplorasi Agentic AI (RAG) dan proyek riset seperti penerjemah BISINDO real-time, karena saya senang mencoba hal baru yang punya dampak nyata.',
]

export default function About() {
  return (
    <section id="about" className="border-t border-line py-16">
      <div className="mb-9 flex items-baseline gap-2.5">
        <span className="font-mono text-xs text-ink-faint">01</span>
        <h2 className="font-display text-2xl font-semibold">Tentang Saya</h2>
        <span className="ml-auto font-mono text-xs text-accent">tentang.md</span>
      </div>
      <div className="grid max-w-[68ch] grid-cols-[34px_1fr] gap-y-3.5 text-base">
        {paragraphs.map((p, i) => (
          <Fragment key={i}>
            <span className="select-none pt-0.5 text-right font-mono text-[12.5px] text-ink-faint">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="col-start-2">{p}</p>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
