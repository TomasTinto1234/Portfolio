import React from 'react'
import image from "../img/94464195.jpg"

const AboutMe = () => {
  return (
    <div>
         <section id="sobremi">
      <div className="contenedor-foto">
          <img src={image} alt=""/>
      </div>
      <div className="sobremi">
          <p className="titulo-seccion">About Me</p>
          <h2>Hello, I am <span>Tomas Tinto</span> </h2>
          <h3>Web Developer</h3>
          <p>I’m a developer with experience in building websites for small and medium sized businesses. Whether you’re trying to win work, list your services or even create a whole online store – I can help! Regular communication is really important to mee, so let’s keep in touch</p>
          <a href="https://www.canva.com/design/DAFUFxMEEhA/5W3wBZtjwLUdb3ido3fquQ/view?utm_content=DAFUFxMEEhA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">Download CV</a>
      </div>
  </section>
    </div>
  )
}

export default AboutMe