import { LayoutProject } from './LayoutProject'
import { Container } from './Mini/Container'
import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'

export function Lab () {
  return (
    <LayoutProject>
      <Image src='1.webp' alt='Portada de https://lab-blond.vercel.app' special={['4lab.webp', '1lab.webp', '2lab.webp', '3lab.webp']} />
      <Container>
        <Title>U Lab</Title>
        <Description github='https://github.com/leoncii/lab' url='https://lab-blond.vercel.app'>Una aplicación para laboratorios (químicos), registra usuarios basado en roles para gestionar los análisis de los clientes como hemogramas, pruebas de embarazo, PCR COVID 19 y mas de 300 análisis, los cuales se puede descargar en formato PDF para que el paciente lo tenga en virtual y un sistema de arqueo de caja.</Description>
      </Container>
    </LayoutProject>
  )
}
