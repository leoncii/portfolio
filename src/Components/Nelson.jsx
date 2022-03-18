import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'

export function Nelson () {
  return (
    <div className='flex h-screen w-full py-14'>
      <div className='overflow-auto'>
        <Image src='nelson.webp' alt='Portada de https://nelson-peluqueria.com' />
      </div>
      <div className='w-full text-center self-center ml-10'>
        <Title>Nelson Peluqueria</Title>
        <Description github='hello github' url='google.com'>Esto tiene analitics</Description>
      </div>
    </div>
  )
}
