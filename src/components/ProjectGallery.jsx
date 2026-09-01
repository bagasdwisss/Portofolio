import { useState } from 'react'
import ImageWithFallback from './ImageWithFallback.jsx'
import Lightbox from './Lightbox.jsx'

export default function ProjectGallery({ images = [], title }) {
  const [main, top, bottom] = images
  const [activeIdx, setActiveIdx] = useState(null)

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="grid h-56 grid-cols-[2fr_1fr] grid-rows-2 gap-1 sm:h-64">
        <ImageWithFallback
          src={main}
          alt={`Screenshot utama ${title}`}
          label={`Tambahkan ${main}`}
          onClick={() => setActiveIdx(0)}
          className="col-start-1 row-span-2 h-full w-full bg-accent-soft/40 object-cover"
        />
        <ImageWithFallback
          src={top}
          alt={`Screenshot ${title} 2`}
          label={`Tambahkan ${top}`}
          onClick={() => setActiveIdx(1)}
          className="col-start-2 row-start-1 h-full w-full bg-accent-soft/40 object-cover"
        />
        <ImageWithFallback
          src={bottom}
          alt={`Screenshot ${title} 3`}
          label={`Tambahkan ${bottom}`}
          onClick={() => setActiveIdx(2)}
          className="col-start-2 row-start-2 h-full w-full bg-accent-soft/40 object-cover"
        />
      </div>

      {activeIdx !== null && (
        <Lightbox
          images={images.map((img) => ({ src: img, alt: title }))}
          currentIndex={activeIdx}
          onClose={() => setActiveIdx(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  )
}