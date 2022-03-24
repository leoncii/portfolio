import { LayoutProject } from './LayoutProject'
import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'

export function Pimpumpam () {
  return (
    <LayoutProject>
      <Image src='pimpumpam.webp' alt='Portada de simple-pimpumpam.com' />
      <div className='w-full text-center self-center'>
        <Title>Simple Pimpumpam</Title>
        <Description github='https://github.com/leoncii/simple-pimpumpam.com' url='https://blog-leoncii.vercel.app/'>Un blog sobre el ecosistema JavaScript, NFT y Blockchain.</Description>
      </div>
    </LayoutProject>
  )
}
