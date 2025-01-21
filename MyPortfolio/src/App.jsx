import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'
import './App.css'
import Navbar from './Components/navbar/navbar'
import { ThemeProvider, useTheme } from './Components/ThemeContext'
import Footer from './Components/footer/footer'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Project'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'

function App() {
  
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    
      <>
      <Navbar/>
      <Home/>
      <About theme={theme} />
      <Projects theme={theme}  />
      <Skills theme={theme}/>
      <Contact theme={theme}  />
      <Footer theme={theme} />
    </>
    
  )
}

export default App
