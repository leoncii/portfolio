export function Hero () {
  return (
    <section className='bg-[#101010] w-full h-screen pl-9 pr-9'>
      <div className='flex justify-between max-w-[1200px] mx-[auto] my-[auto] h-full'>
        <header className='flex flex-col w-fit h-[80vh] justify-center'>
          <h1 className='text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 leading-[76px]'>Leonardo Torrico</h1> <p className='text-pink-100 text-[24px] leading-8'>Desarrollador de Software</p>
        </header>
        <picture className='self-center'>
          <img className='h-[600px] object-contain' src='persona_sentada.png' alt='Retrato de Leonardo' />
        </picture>
      </div>
    </section>
  )
}
