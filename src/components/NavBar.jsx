import React from 'react'

const NavBar = () => {
  
  function responsiveMenu() {
    const x = document.getElementById("elnav");
    if (x.className === "elnav") {
        x.className = "responsive";
    } else {
        x.className = "elnav";
    }
}
  return (
    <div>
         <section id="inicio">
      <div className ="contenido">
        <header>
          <div className="contenido-header">
           <h1>TT</h1>
           <nav id="elnav">
                        <ul id="links">
                            <li><a href="#inicio"  onclick="seleccionar(this)">HOME</a></li>
                            <li><a href="#sobremi" onclick="seleccionar(this)">ABOUT ME</a></li>
                            <li><a href="#servicios" onclick="seleccionar(this)">CERTIFICATE</a></li>
                            <li><a href="#portfolio" onclick="seleccionar(this)">PORTFOLIO</a></li>
                            <li><a href="#contacto" onclick="seleccionar(this)">CONTACT</a></li>
                        </ul>
                    </nav>

                    <nav id="icono-nav" onClick={()=>responsiveMenu()}>
                        <i class="fa-solid fa-bars"></i>
                    </nav>

          <div  className="redes">
          <a href="https://wa.me/+541161263966" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="https://www.linkedin.com/in/tomas-tinto-320a85236/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/TomasTinto1234" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.instagram.com/tomas_tinto/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"></a> 
          </div>
          </div>
        </header>
          <div  className="presentacion">
            <p className="bienvenida">Welcome</p>
            <h2>I am <span>Tomas Tinto</span>, Web Developer</h2>
            <p className="descripcion"> HTML || CSS || JavaScript || React || Redux || Node || Express || PostgresSQL || MongoDB || SCRUM || Notion</p>
              <a href="#portfolio"> Go to Portfolio</a>
            </div>
      </div>
    </section>
    </div>
  )
}

export default NavBar