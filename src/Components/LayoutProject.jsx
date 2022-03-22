export function LayoutProject ({ children, direction = null }) {
  return (
    <div className={`flex w-full mb-24 md:mb-32 flex-col-reverse place-content-center xl:flex-row
   ${direction ? 'flex-row-reverse' : ''}`}
    >{children}
    </div>
  )
}
