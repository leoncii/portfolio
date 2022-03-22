import './App.css'
import { About } from './Components/About'
import { Hero } from './Components/Hero'
import { Layout } from './Components/Layout'
import { Proyects } from './Components/Proyects'
import { Fancy } from './Fancy'

function App () {
  return (
    <>
      <Hero />
      <Layout>
        <Proyects />
        <About />
      </Layout>
    </>
  )
}

export default App
