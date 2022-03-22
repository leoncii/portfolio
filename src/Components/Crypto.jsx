import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'
import { LayoutProject } from './LayoutProject'

export function Crypto () {
  return (
    <LayoutProject>
      <Image src='crypto.webp' alt='Portada de https://play.google.com/store/apps/details?id=com.LTB_144.CryptoMarket' />
      <div className='w-full text-center self-center'>
        <Title>Crypto Market</Title>
        <Description github='hello github' url='google.com'>Esto esta en la play store</Description>
      </div>
    </LayoutProject>
  )
}
