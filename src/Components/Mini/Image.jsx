export function Image ({ src, alt }) {
  return (
    <div className='overflow-auto rounded-lg max-w-3xl mx-[auto]'>
      <picture>
        <img className='object-contain' src={src} alt={alt} />
      </picture>
    </div>
  )
}
