import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'

export function Crypto () {
  return (
    <div className='flex h-screen w-full py-14'>
      <div className='overflow-auto'>
        <Image src='crypto.webp' alt='Portada de https://play.google.com/store/apps/details?id=com.LTB_144.CryptoMarket' />
      </div>
      <div className='w-full text-center self-center ml-10'>
        <Title>Crypto Market</Title>
        <Description github='hello github' url='google.com'>Esto esta en la play store</Description>
      </div>
    </div>
  )
}
