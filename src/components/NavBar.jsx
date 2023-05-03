import React from 'react'

const NavBar = () => {
  
  return (
    <div>
         <section id="inicio">
      <div className ="contenido">
        <header>
          <div className="contenido-header">
           <h1>TT</h1>
           <nav id="nav" class="">
                        <ul id="links">
                            <li><a href="#inicio" class="seleccionado" onclick="seleccionar(this)">INICIO</a></li>
                            <li><a href="#sobremi" onclick="seleccionar(this)">SOBRE MI</a></li>
                            <li><a href="#servicios" onclick="seleccionar(this)">SERVICIOS</a></li>
                            <li><a href="#portfolio" onclick="seleccionar(this)">PORTFOLIO</a></li>
                            <li><a href="#contacto" onclick="seleccionar(this)">CONTACTO</a></li>
                        </ul>
                    </nav>

                    <div id="icono-nav" onclick="responsiveMenu()">
                        <i class="fa-solid fa-bars"></i>
                    </div>

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