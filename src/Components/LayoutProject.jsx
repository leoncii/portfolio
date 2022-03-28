export function LayoutProject ({ children, direction = null }) {
  console.log('direction', direction)
  return (
    <div className={`flex w-full mb-24 items-center md:mb-44 flex-col-reverse place-content-center xl:flex-row ${direction !== null && 'flex-row-reverse'}`}>{children}
    </div>
  )
}
