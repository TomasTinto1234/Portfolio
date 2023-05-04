import React from 'react'
import certificadoHenry from "../img/certificadoHenry.jpg"
import certificadoUtn from "../img/certificadoUTN.jpeg"
import certificadoUTN from "../img/CERTIFICADUTN.jpeg"

const Services = () => {
  return (
    <div >
         <section id="servicios" className='contenedor-skills3'>
    <h3 className="titulo-seccion">MY CERTIFICATE</h3>
    <div className="fila">
        <div className="servicio">
            {/* <span className="icono"> <i className="fa-solid fa-code"></i></span>
            <h4>Web Site Design</h4>
            <ul className="servicios-tag">
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <p>full development of Web Sites</p> */}<a href="https://campus.argentinaprograma.utn.edu.ar/mod/customcert/view.php?id=61553&downloadown=1" className='as' target="_blank">
            <p className="titulo-seccion">universidad tecnologica nacional</p>
            <img src={certificadoUtn} className='image'/>
            <h4>UTN</h4></a>
            {/* <div className="info">
       </div> */}
        </div>
        <div className="servicio"><a href="https://certificates.soyhenry.com/cert?id=1557c58a-24e1-43af-9e63-bdf9e37041cb" className='as' target="_blank">
        <p className="titulo-seccion">soy-henry</p>
        <img src={certificadoHenry} className='image'/>
        <h4>HENRY</h4></a>
        {/* <div className="info">
       </div> */}
            {/* <span className="icono"><i class="fa-brands fa-react"></i></span>
            <h4>React</h4>
            <ul className="servicios-tag">
                <li> Native, </li>
                <li> React,  </li>
                <li> Redux </li>
            </ul>
            <p>React technologies</p> */}
        </div>
        <div className="servicio"><a href="https://campus.argentinaprograma.utn.edu.ar/mod/customcert/view.php?id=61552&downloadown=1" className='as' target="_blank">
        <p className="titulo-seccion">universidad tecnologica nacional</p>
        <img src={certificadoUTN} className='image'/>
        <h4>UTN</h4></a>
        {/* <div className="info">
       </div> */}
            {/* <span className="icono"><i className="fa-brands fa-square-js"></i></span>
            <h4>JavaScript</h4>
            <ul className="servicios-tag">
                <li>Express, </li>
                <li> Node, </li>
                <li> React, </li>
                <li> Redux</li>
            </ul>
            <p>JavaScript technologies</p> */}
        </div>
{/*         
        <div className="servicio">
        <img src={imagen1} className='image'/> */}
          {/* <span className="icono"><i className="fa-solid fa-database"></i></span>
          <h4>Database</h4>
            <ul className="servicios-tag">
                <li>Postgres,</li>
                <li> MongoDB,</li>
                <li> PgAdmin4,</li>
                <li> FireBase</li>
            </ul>
            <p>database management</p> */}
        {/* </div> */}
      </div>
</section>
    </div>
  )
}

export default Services