import { LayoutProject } from './LayoutProject'
import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'

export function Nelson () {
  return (
    <LayoutProject>
      <Image src='nelson.webp' alt='Portada de https://nelson-peluqueria.com' />
      <div className='w-full text-center self-center'>
        <Title>Nelson Peluqueria</Title>
        <Description github='https://github.com/leoncii/spa-nelson' url='https://nelson-peluqueria.com/'>Un sitio web de peluqueria para mostrar los trabajos realizados como Tintes, Balayage, Cortes de pelo. </Description>
      </div>
    </LayoutProject>
  )
}
