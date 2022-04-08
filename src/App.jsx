import './App.css'
import { About } from './Components/About'
import { Hero } from './Components/Hero'
import { Layout } from './Components/Layout'
import { Proyects } from './Components/Proyects'
import { TypeWriting } from './Components/TypeWriting'

function App () {
  return (
    <>
      <Hero />
      <Layout>
        <Proyects />
        <About />
        <TypeWriting />
      </Layout>
    </>
  )
}

export default App
