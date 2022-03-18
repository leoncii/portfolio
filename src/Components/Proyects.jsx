import { Andres } from './Andres'
import { Pimpumpam } from './Pimpumpam'
import { Nelson } from './Nelson'
import { Crypto } from './Crypto'
import { Lab } from './Lab'

export function Proyects () {
  return (
    <>
      <h1 className='text-5xl font-black py-20 mx-[auto] text-center'>Trabajos</h1>
      <Pimpumpam />
      <Andres />
      <Nelson />
      <Crypto />
      <Lab />
    </>
  )
}
