export function Hero () {
  return (
    <section id='hero' className='bg-[#101010] w-full h-[auto] pb-8 pl-4 md:pl-9 pr-4 md:pr-9 mb-32 md:mb-0'>
      <div className='md:flex items-center justify-between max-w-[1200px] mx-[auto] my-[auto] h-full '>
        <header className='flex h-[35vh] mx-[auto] md:ml-[0] flex-col w-fit md:h-[80vh] justify-center'>
          <h1 id='name' className='flex flex-wrap font-extrabold  leading-[76px]'>
            <span id='leonardo' className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-red-400 to-yellow-600 text-5xl sm:text-7xl'>Leonardo</span>
            <span id='torrico' className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-red-400 to-indigo-600 text-5xl sm:text-7xl'>Torrico</span>
          </h1>
          <p id='namep' className='text-pink-100 text-lg sm:text-[24px] leading-8'>Desarrollador de Software</p>
          <div id='buttons1'>
            <button id='button'>Hover me!</button>
            <button id='button'>Hover me!</button>
          </div>
        </header>
        <picture className='self-center'>
          <img id='photo' className='w-96 mb-8 mx-[auto] rotate-[25deg] rounded-[50%] object-contain' src='photo1.webp' alt='Retrato de Leonardo' />
        </picture>
        <div id='buttons' className='mx-[auto] flex flex-col justify-between text-center'>
          <button id='button' className='w-full md:mr-4 mb-4'>#</button>
          <button id='button' className='w-full mb-4'>#</button>
        </div>
      </div>
      <div id='circle' />
      <div id='circle_' />
    </section>
  )
}

// bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300
