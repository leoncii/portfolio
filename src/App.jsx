import './App.css'
import { About } from './Components/About'
import { Footer } from './Components/Footer'
import { Hero } from './Components/Hero'
import { Layout } from './Components/Layout'
import { Proyects } from './Components/Proyects'
import { TypeWriting } from './Components/TypeWriting'
import { Editor } from './Components/Editor'

function App () {
  return (
    <>
      <Hero />
      <Editor />
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
