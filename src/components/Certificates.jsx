import { useState, useRef } from 'react'
import certificates from '../data/certificates.js'
import ImageWithFallback from './ImageWithFallback.jsx'
import Lightbox from './Lightbox.jsx'

export default function Certificates() {
    const [activeIndex, setActiveIndex] = useState(null)
    const scrollRef = useRef(null)

    const formattedCertificates = certificates.map((cert) => ({
        src: cert.image,
        alt: cert.title
    }))

    const handlePrevLightbox = () => {
        setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))
    }

    const handleNextLightbox = () => {
        setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))
    }

    // Fungsi untuk menggulir daftar sertifikat ke kiri / kanan
    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollAmount = clientWidth * 0.8
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section id="certificates" className="border-t border-line py-16">
            <div className="mb-9 flex items-center justify-between">
                <div className="flex items-baseline gap-2.5">
                    <span className="font-mono text-xs text-ink-faint">03</span>
                    <h2 className="font-display text-2xl font-semibold">Sertifikasi</h2>
                    <span className="font-mono text-xs text-accent">sertifikat/</span>
                </div>

                {/* Tombol Navigasi Scroll Horisontal */}
                {certificates.length > 3 && (
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => scroll('left')}
                            aria-label="Gulir Ke Kiri"
                            className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-panel text-ink transition-colors hover:bg-accent-soft/50"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll('right')}
                            aria-label="Gulir Ke Kanan"
                            className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-panel text-ink transition-colors hover:bg-accent-soft/50"
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>

            {/* Kontainer Scroll Horisontal (Scroll Snap) */}
            <div
                ref={scrollRef}
                className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {certificates.map((cert, idx) => (
                    <div
                        key={cert.id || idx}
                        className="w-[280px] shrink-0 snap-start overflow-hidden rounded-md border border-line bg-panel sm:w-[320px] lg:w-[360px]"
                    >
                        <ImageWithFallback
                            src={cert.image}
                            alt={cert.title}
                            label={`Tambahkan ${cert.image}`}
                            onClick={() => setActiveIndex(idx)}
                            className="h-40 w-full bg-accent-soft/40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="mb-1 font-display text-sm font-semibold">{cert.title}</h3>
                            <p className="font-mono text-xs text-ink-soft">
                                {cert.issuer} · {cert.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Lightbox */}
            {activeIndex !== null && (
                <Lightbox
                    images={formattedCertificates}
                    currentIndex={activeIndex}
                    onClose={() => setActiveIndex(null)}
                    onPrev={handlePrevLightbox}
                    onNext={handleNextLightbox}
                />
            )}
        </section>
    )
}