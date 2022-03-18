import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'

export function Pimpumpam () {
  return (
    <div className='flex h-screen w-full py-14'>
      <div className='overflow-auto'>
        <Image src='pimpumpam.webp' alt='Portada de simple-pimpumpam.com' />
      </div>
      <div className='w-full text-center self-center ml-10'>
        <Title>Simple Pimpumpam</Title>
        <Description github='hello github' url='google.com'>Un blog para webear</Description>
      </div>
    </div>
  )
}
