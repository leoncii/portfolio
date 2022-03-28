
export function Title5 ({ children, text = null }) {
  return <h1 className={`text-7xl my-4 md:scale-[1.1] xl:scale-[1.2] font-black pb-8 mx-[auto] text-center w-max ${text || 'md:py-28 xl:py-40'}`}>{children}</h1>
}
