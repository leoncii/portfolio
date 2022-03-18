import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'

export function Andres () {
  return (
    <div className='flex h-screen w-full py-14'>
      <div className='overflow-auto'>
        <Image src='andres.webp' alt='Portada de andrestorrico.com' />
      </div>
      <div className='w-full text-center self-center'>
        <Title>Andres Gimnasio</Title>
        <Description github='hello github' url='google.com'>La description del andres</Description>
      </div>
    </div>
  )
}
