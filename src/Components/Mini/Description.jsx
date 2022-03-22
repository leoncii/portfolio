import { Web } from '../Svg/Web'
import { Gh } from '../Svg/Gh'

export function Description ({ github, url, children }) {
  return (
    <div className='w-full max-w-xl mx-[auto]'>
      <p className='text-base'> {children}</p>
      <div className='flex w-full mx-[auto] justify-center my-4'>
        <a title='Sitio Web' className='mt-[6px] hover:scale-[1.1] mr-8 opacity-80' href={url} target='_blank' rel='noopener noreferrer'><Web /></a>
        <a title='Ir a su repositorio' className='opacity-80 hover:scale-[1.1]' href={github} target='_blank' rel='noopener noreferrer'><Gh /></a>
      </div>
    </div>
  )
}
