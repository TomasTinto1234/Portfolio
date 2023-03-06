import React from 'react'
import imagen from "../img/pi-lookhouse.jpeg"
import imagen1 from "../img/image.png"
import imagen2 from "../img/pi-dogs.jpeg"
import imagen3 from "../img/pi-videogames.jpeg"
import imagen4 from "../img/pi-pokemons.jpeg"


const Portfolio = () => {
  return (
    <div className='contenedor-skills4'>
         <section id="portfolio">
   <h3 className="titulo-seccion">My Projects<a href="https://github.com/TomasTinto1234" target="_blank" > <i className="fa-brands fa-github"></i></a></h3>
   <div className="fila">
     <div className="proyecto">
       <div className="overlay"></div>
     <img src={imagen}  alt=""/>
       <div className="info">
           <h4><a href="https://look-house.vercel.app/" target="_blank">Grupal Proyect LookHouse</a></h4>
           <p>Web Design</p>
       </div>
   </div>
   <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen1} alt=""/>
           <div className="info">
               <h4><a href="https://e-commerce-1pwr.vercel.app/" target="_blank">Proyecto Individual E-commerce</a></h4>
               <p>Web Design</p>
           </div>
       </div>
       <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen2} alt=""/>
           <div className="info">
               <h4><a href="https://dogs-individual-proyect.vercel.app/" target="_blank"> Individual Proyect Dogs</a></h4>
               <p>Web Design</p>
           </div>
       </div>
       <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen3} alt=""/>
           <div className="info">
               <h4> <a href="https://videogames-individual-proyect.vercel.app/" target="_blank"> Individual Proyect Videogames</a></h4>
               <p>Web Design</p>
           </div>
       </div>
       <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen4} alt=""/>
           <div className="info">
               <h4> <a href="https://pokemon-individual-proyect.vercel.app/" target="_blank"> Individual Proyect Pokemons</a></h4>
               <p>Web Design</p>
           </div>
       </div>
   </div>
  </section>
    </div>
  )
}

export default Portfolio