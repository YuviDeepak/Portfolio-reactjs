import { useState } from 'react'
import './App.css'
import  './components/Header/Header.css'
import  './components/Aside/Aside.css'
import './components/Home/Home.css'
import './components/About/About.css'
import './components/Links/Links.css'
import './components/Skills/Skills.css'
import './components/Contact/Contact.css'
import './components/Projects/Projects.css'
import'./components/Projectpop/Projectpop.css'
import { Header } from './components/Header/Header'
import { Aside } from './components/Aside/Aside'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Projects } from './components/Projects/Projects'
import { MiniProject } from './components/MiniProject/MiniProject'

function App() {

  return (
    <>
      <Header />
      <div className="containerrr">
        <Aside />
        <div className="vj">
          <Home />
          <About />
          <Skills />
          <Projects />
          <MiniProject />
          <Contact />
        </div>
       
      </div>
    </>
  )
}

export default App
