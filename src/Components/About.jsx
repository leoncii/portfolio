import { Title5 } from './Mini/Title5'
import { Description } from './Mini/Description'

export function About () {
  return (
    <>
      <Title5 text='h-[88px]'>
        Sobre mí...
      </Title5>
      <Description only>
        Soy un desarrollador de aplicaciones web y escritorio de confianza, en este momento estoy de freelancer trabajando con Next.js y <strong>JavaScript</strong>. Me gusta hacer "Penetration Tester" en entornos controlados como en <a href='https://www.hackthebox.com/' target='_blank' rel='noreferrer'>Hack The Box</a>.
      </Description>
    </>
  )
}
