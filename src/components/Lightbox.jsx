import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ images = [], currentIndex = 0, onClose, onPrev, onNext }) {
    const [isOpen, setIsOpen] = useState(false)

    const currentImage = typeof images[currentIndex] === 'string'
        ? { src: images[currentIndex], alt: '' }
        : images[currentIndex]

    useEffect(() => {
        // Aktifkan animasi smooth masuk
        const animationFrame = requestAnimationFrame(() => setIsOpen(true))

        const onKey = (e) => {
            if (e.key === 'Escape') handleClose()
            if (e.key === 'ArrowLeft' && onPrev) onPrev()
            if (e.key === 'ArrowRight' && onNext) onNext()
        }

        document.addEventListener('keydown', onKey)

        // Kunci scroll tanpa mengubah width layout (mencegah flickering layout shift)
        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            cancelAnimationFrame(animationFrame)
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = originalOverflow
        }
    }, [onPrev, onNext])

    const handleClose = () => {
        setIsOpen(false)
        setTimeout(() => {
            onClose()
        }, 200) // Waktu penutupan smooth
    }

    if (!currentImage?.src) return null

    // Gunakan Portal agar terpisah dari hirarki DOM grid utama
    return createPortal(
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm transition-opacity duration-200 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'
                }`}
            onClick={handleClose}
        >
            {/* Tombol Tutup */}
            <button
                type="button"
                onClick={handleClose}
                aria-label="Tutup"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-colors duration-200 hover:bg-white/20"
            >
                ×
            </button>

            {/* Tombol Previous */}
            {images.length > 1 && onPrev && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation()
                        onPrev()
                    }}
                    aria-label="Sebelumnya"
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors duration-200 hover:bg-white/20"
                >
                    ‹
                </button>
            )}

            {/* Kontainer Gambar (Ukuran Proporsional Murni & Animasi Smooth) */}
            <div
                className={`flex max-h-[85vh] max-w-[85vw] items-center justify-center transition-transform duration-200 ease-out ${isOpen ? 'scale-100' : 'scale-95'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={currentImage.src}
                    alt={currentImage.alt || ''}
                    className="max-h-[85vh] max-w-[85vw] select-none object-contain rounded-sm"
                />
            </div>

            {/* Tombol Next */}
            {images.length > 1 && onNext && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation()
                        onNext()
                    }}
                    aria-label="Selanjutnya"
                    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors duration-200 hover:bg-white/20"
                >
                    ›
                </button>
            )}
        </div>,
        document.body
    )
}