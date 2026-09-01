import { useState } from 'react'

export default function ImageWithFallback({ src, alt, label, className = '', onClick }) {
  const [errored, setErrored] = useState(false)

  if (errored || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-accent-soft p-3 text-center font-mono text-[11px] leading-snug text-accent-strong ${className}`}
      >
        {label || 'Gambar belum ditambahkan'}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      onClick={onClick}
      className={`${className} transition-opacity duration-200 ease-out hover:opacity-90 ${onClick ? 'cursor-pointer' : ''
        }`}
      style={{
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
      }}
    />
  )
}