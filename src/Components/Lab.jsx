import { LayoutProject } from './LayoutProject'
import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'

export function Lab () {
  return (
    <LayoutProject>
      <Image src='1.webp' alt='Portada de https://lab-blond.vercel.app' special />
      <div className='w-full text-center self-center max-w-xl'>
        <Title>U Lab</Title>
        <Description github='https://github.com/leoncii/lab' url='https://lab-blond.vercel.app'>Una aplicación para laboratorios (químicos) y registrar usuarios basado en roles para gestionar análisis a los clientes como hemogramas, pruebas de embarazo, PCR COVID 19 y mas de 300 análisis descargable en PDF y un sistema de arqueo de caja.</Description>
      </div>
    </LayoutProject>
  )
}
