import React from 'react'
import imagen from "../img/pi-lookhouse.jpeg"
import imagen1 from "../img/image.png"
import imagen2 from "../img/pi-dogs.jpeg"
import imagen3 from "../img/pi-videogames.jpeg"
import imagen6 from "../img/imagen6.jpeg"
import imagen5 from "../img/imagen5.jpeg"
import imagen7 from "../img/half2.jpeg"
import imagen8 from "../img/calculadora.jpeg"
import imagen9 from "../img/ToDoList.jpeg"
import { Link } from 'react-router-dom'



const Portfolio = () => {
  return (
    <div className='contenedor-skills4'>
         <section id="portfolio">
   <h3 className="titulo-seccion">My Projects<a href="https://github.com/TomasTinto1234" target="_blank" className='github' > <i className="fa-brands fa-github"></i></a></h3>
   <div className="fila">
   <div className="proyecto">
       <div className="overlay"></div>
     <img src={imagen7}  alt="Half"/>
       <div className="info">
           <h4><a href="https://expo.dev/artifacts/eas/d5NBUhWzqQ27HHYj1Tw7LN.apk" className='as' target="_blank">Half</a></h4>
           <p>React-Native</p>
       </div>
   </div>
   <div className="proyecto">
       <div className="overlay"></div>
     <img src={imagen5}  alt="migueloviedo"/>
       <div className="info">
           <h4><a href="https://miguel-oviedo.com/" className='as' target="_blank">MiguelOviedo</a></h4>
           <p>Web Design</p>
       </div>
   </div>
     <div className="proyecto">
       <div className="overlay"></div>
     <img src={imagen}  alt="lookhouse"/>
       <div className="info">
           <h4><a href="https://look-house.vercel.app/" className='as' target="_blank">LookHouse</a></h4>
           <p>Web Design</p>
       </div>
   </div>
   <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen6} alt="venta-libre"/>
           <div className="info">
               <h4><a href="https://ventalibre-37qgud8y0-tomastinto1234.vercel.app/" className='as' target="_blank">Venta-Libre</a></h4>
               <p>Web Design</p>
           </div>
       </div>
   <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen1} alt="e-commerce"/>
           <div className="info">
               <h4><a href="https://e-commerce-1pwr.vercel.app/" className='as' target="_blank">E-commerce</a></h4>
               <p>Web Design</p>
           </div>
       </div>
       <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen8} alt="calculadora"/>
           <div className="info">
               <h4><a href="https://calculadora-403qu6863-tomastinto1234.vercel.app/" className='as' target="_blank">Calculadora</a></h4>
               <p>Web Design</p>
           </div>
       </div>
       <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen9} alt="ToDo-List"/>
           <div className="info" >
               <h4><a href="https://todo-list-837qo7rqw-tomastinto1234.vercel.app/" className='as' target="_blank">ToDo List</a></h4>
               <p>Web Design</p>
           </div>
       </div>
   </div>
   <div className='center'>
   <button   value="GitHub" className="btn-GitHub"><a href="https://github.com/TomasTinto1234?tab=repositories" target="_blank" className='github'>GitHub</a></button>
   </div>
  </section>
    </div>
  )
}

export default Portfolio