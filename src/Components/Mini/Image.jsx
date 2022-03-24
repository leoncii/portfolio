export function Image ({ src, alt, special = null }) {
  return (
    <div className={`rounded-lg mx-[auto] md:h-[70vh] px-2 md:px-8 ${!special ? 'max-w-3xl overflow-auto' : 'w-[300px]'}`}>
      {
        special === null
          ? <picture>
            <img className='object-contain h-fit' src={src} alt={alt} />
            </picture>
          : <picture className='flex rounded-lg overflow-x-auto'>
            <img className='object-contain pr-12 h-fit' src='4.webp' alt={alt} />
            <img className='object-contain pr-12 h-fit' src='2.webp' alt={alt} />
            <img className='object-contain pr-12 h-fit' src='3.webp' alt={alt} />
            <img className='object-contain h-fit' src='1.webp' alt={alt} />
          </picture>
  }
    </div>
  )
}
