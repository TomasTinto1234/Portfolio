import React from 'react'

const Habilities = () => {
  return (
         <div className="contenedor-skills" id="skills">
        <h3>SKILLS </h3>
        <div className="skill">
            <div className="info">
                <p> <span className="lista"> </span>Html & Css</p>
                <span className="porcentaje">95%</span>
            </div>

            <div className="barra">
                <div className="" id="html"></div>
            </div>
        </div>
        <div className="skill">
            <div className="info">
                <p> <span className="lista"> </span>Javascript</p>
                <span class="porcentaje">90%</span>
            </div>

            <div className="barra">
                <div className="" id="js"></div>
            </div>
        </div>
        <div className="skill">
            <div className="info">
                <p> <span className="lista"> </span>Bases de Datos</p>
                <span className="porcentaje">90%</span>
            </div>

            <div className="barra">
                <div className="" id="bd"></div>
            </div>
        </div>
    </div>
  )
}

export default Habilities