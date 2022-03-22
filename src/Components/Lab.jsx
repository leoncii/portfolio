import { LayoutProject } from './LayoutProject'
import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'

export function Lab () {
  return (
    <LayoutProject>
      <Image src='lab.webp' alt='Portada de https://lab-blond.vercel.app' />
      <div className='w-full text-center self-center'>
        <Title>U Lab</Title>
        <Description github='hello github' url='google.com'>El laboratorio gosu</Description>
      </div>
    </LayoutProject>
  )
}
