import React from 'react'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Footer from './Footer'
import NavBar from './NavBar'
import Portfolio from './Portfolio'
import Services from './Services'
import Habilities from './Habilities'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <AboutMe/>
        <Portfolio/>
        <Services/>
        <Habilities/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home