export function Image ({ src, alt }) {
  return (
    <picture>
      <img className='object-contain rounded' src={src} alt={alt} />
    </picture>
  )
}
