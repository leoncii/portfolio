import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'

export function Lab () {
  return (
    <div className='flex h-screen w-full py-14'>
      <div className='overflow-auto'>
        <Image src='lab.webp' alt='Portada de https://lab-blond.vercel.app' />
      </div>
      <div className='w-full text-center self-center ml-10'>
        <Title>U Lab</Title>
        <Description github='hello github' url='google.com'>El laboratorio gosu</Description>
      </div>
    </div>
  )
}
