import React from 'react'
import imagen from "../img/pi-lookhouse.jpeg"
import imagen1 from "../img/image.png"
import imagen2 from "../img/pi-dogs.jpeg"
import imagen3 from "../img/pi-videogames.jpeg"
import imagen6 from "../img/vneta.jpeg"
import imagen5 from "../img/miguelito.jpeg"
import imagen7 from "../img/ynos.jpeg"
import imagen8 from "../img/proyecto4.jpg"
import imagen9 from "../img/todo.jpeg"
import imagen10 from "../img/curso.jpeg"
import Dolar from "../img/dol.jpeg"
import github from "../img/GitHub-Mark.png"
import weather from "../img/weatherapps.jpeg"
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
           <h4><a href="https://expo.dev/@tomastinto/ynos1?serviceType=classic&distribution=expo-go" className='as' target="_blank">Ynos</a></h4>
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
     <img src={imagen10}  alt="curso"/>
       <div className="info">
           <h4><a href="https://cursos-psi.vercel.app/" className='as' target="_blank">Courses</a></h4>
           <p>Web Design</p>
       </div>
   </div>
       <div className="proyecto">
           <div className="overlay"></div>
           <img src={Dolar} alt="Dolar"/>
           <div className="info">
               <h4><a href="https://dolar-lemon.vercel.app/" className='as' target="_blank">Dolar Hoy</a></h4>
               <p>Web Design</p>
           </div>
       </div>
       <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen8} alt="portfolio"/>
           <div className="info">
               <h4><a href="https://portfolio-tomas-tinto.vercel.app/" className='as' target="_blank">Portfolio</a></h4>
               <p>Web Design</p>
           </div>
       </div>
       <div className="proyecto">
           <div className="overlay"></div>
           <img src={github} alt="GitHub"/>
           <div className="info">
               <h4><a href="https://github.com/TomasTinto1234" className='as' target="_blank">Check more Projects in github</a></h4>
               <p>Github</p>
           </div>
       </div> 
        <div className="proyecto">
       <div className="overlay"></div>
     <img src={weather}  alt="weatherapp"/>
       <div className="info">
           <h4><a href="https://weatherapp-omega-ten.vercel.app/" className='as' target="_blank">WeatherApp</a></h4>
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
   {/* <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen6} alt="venta-libre"/>
           <div className="info">
               <h4><a href="https://ventalibre-37qgud8y0-tomastinto1234.vercel.app/" className='as' target="_blank">(in production)Venta-Libre</a></h4>
               <p>Web Design</p>
           </div>
       </div> */}
   <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen1} alt="e-commerce"/>
           <div className="info">
               <h4><a href="https://e-commerce-1pwr.vercel.app/" className='as' target="_blank">(in production)E-commerce</a></h4>
               <p>Web Design</p>
           </div>
       </div>
      {/*   <div className="proyecto">
           <div className="overlay"></div>
           <img src={imagen9} alt="ToDo-List"/>
           <div className="info" >
               <h4><a href="https://todo-list-837qo7rqw-tomastinto1234.vercel.app/" className='as' target="_blank">ToDo List</a></h4>
               <p>Web Design</p>
           </div>
       </div> */}
   </div>
   <div className='center'>
   <button   value="GitHub" className="btn-GitHub"><a href="https://github.com/TomasTinto1234?tab=repositories" target="_blank" className='github'>GitHub</a></button>
   </div>
  </section>
    </div>
  )
}

export default Portfolio