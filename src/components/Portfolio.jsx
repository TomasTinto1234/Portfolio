import React from 'react'
import imagen from "../img/pi-lookhouse.jpeg"
import imagen1 from "../img/image.png"
import imagen2 from "../img/pi-dogs.jpeg"
import imagen3 from "../img/pi-videogames.jpeg"
import imagen6 from "../img/imagen6.jpeg"
import imagen5 from "../img/imagen5.jpeg"


const Portfolio = () => {
  return (
    <div className='contenedor-skills4'>
         <section id="portfolio">
   <h3 className="titulo-seccion">My Projects<a href="https://github.com/TomasTinto1234" target="_blank" > <i className="fa-brands fa-github"></i></a></h3>
   <div className="fila">
     <div className="proyecto">
       <div className="overlay"></div>
     <img src={imagen}  alt="lookhouse"/>
       <div className="info">
           <h4><a href="https://look-house.vercel.app/" target="_blank">Proyect LookHouse</a></h4>
           <p>Web Design</p>
       </div>
   </div>
   <div className="proyecto">
       <div className="overlay"></div>
     <img src={imagen5}  alt="migueloviedo"/>
       <div className="info">
           <h4><a href="https://miguel-oviedo.com/" target="_blank">Proyect MiguelOviedo</a></h4>
           <p>Web Design</p>
       </div>
   </div>
   <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen6} alt="venta-libre"/>
           <div className="info">
               <h4><a href="https://ventalibre-37qgud8y0-tomastinto1234.vercel.app/" target="_blank">Proyect venta-libre</a></h4>
               <p>Web Design</p>
           </div>
       </div>
   <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen1} alt="e-commerce"/>
           <div className="info">
               <h4><a href="https://e-commerce-1pwr.vercel.app/" target="_blank">Proyect E-commerce</a></h4>
               <p>Web Design</p>
           </div>
       </div>
       <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen2} alt=""/>
           <div className="info">
               <h4><a href="https://dogs-individual-proyect.vercel.app/" target="_blank">Proyect Dogs</a></h4>
               <p>Web Design</p>
           </div>
       </div>
       {/* <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen3} alt="videogames"/>
           <div className="info">
               <h4> <a href="https://videogames-individual-proyect.vercel.app/" target="_blank">Proyect Videogames</a></h4>
               <p>Web Design</p>
           </div>
       </div> */}
   </div>
  </section>
    </div>
  )
}

export default Portfolio