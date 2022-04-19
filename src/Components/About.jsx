import { Title5 } from './Mini/Title5'
import { Description } from './Mini/Description'

export function About () {
  return (
    <>
      <Title5 text='h-[88px]'>
        Sobre mí...
      </Title5>
      <Description only>
        Leonardo es un Desarrollador de Aplicaciones Web y Escritorio de confianza, en este momento esta de freelancer trabajando con Next.js y JavaScript. Le gusta mucho aprender por eso hace "Penetration Tester" en entornos controlados como en <a href='https://www.hackthebox.com/' target='_blank' rel='noreferrer'>Hack The Box</a>.
      </Description>
    </>
  )
}
