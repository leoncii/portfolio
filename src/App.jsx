import './App.css'
import { About } from './Components/About'
import { Footer } from './Components/Footer'
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
      <Footer />
    </>
  )
}

export default App
