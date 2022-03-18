
export function Description ({ github, url, children }) {
  return (
    <div>
      <p>{children}</p>
      <span>{url}</span>
      <span>{github}</span>
    </div>
  )
}
