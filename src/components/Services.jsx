import React from 'react'

const Services = () => {
  return (
    <div >
         <section id="servicios" className='contenedor-skills3'>
    <h3 className="titulo-seccion">MY SERVICES</h3>
    <div className="fila">
        <div className="servicio">
            <span className="icono"> <i className="fa-solid fa-code"></i></span>
            <h4>Web Site Design</h4>
            <ul className="servicios-tag">
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <p>full development of Web Sites</p>
        </div>
        <div className="servicio">
            <span className="icono"><i class="fa-brands fa-react"></i></span>
            <h4>React</h4>
            <ul className="servicios-tag">
                <li> Native, </li>
                <li> React,  </li>
                <li> Redux </li>
            </ul>
            <p>React technologies</p>
        </div>
        <div className="servicio">
            <span className="icono"><i className="fa-brands fa-square-js"></i></span>
            <h4>JavaScript</h4>
            <ul className="servicios-tag">
                <li>Express, </li>
                <li> Node, </li>
                <li> React, </li>
                <li> Redux</li>
            </ul>
            <p>JavaScript technologies</p>
        </div>
        
        <div className="servicio">
          <span className="icono"><i className="fa-solid fa-database"></i></span>
          <h4>Database</h4>
            <ul className="servicios-tag">
                <li>Postgres,</li>
                <li> MongoDB,</li>
                <li> PgAdmin4,</li>
                <li> FireBase</li>
            </ul>
            <p>database management</p>
        </div>
      </div>
</section>
    </div>
  )
}

export default Services