import { LayoutProject } from './LayoutProject'
import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'

export function Andres () {
  return (
    <LayoutProject direction>
      <Image src='andres.webp' alt='Portada de andrestorrico.com' />
      <div className='w-full text-center self-center'>
        <Title>Andres Gimnasio</Title>
        <Description github='https://github.com/leoncii/andres' url='https://blo-post.vercel.app'>Sitio web informativo para un gimnasio.</Description>
      </div>
    </LayoutProject>
  )
}
