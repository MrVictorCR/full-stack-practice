import React from "react";
import '../stylessheet/testimonio.css';

  function Testimonio(props){
    return(
      <div className= 'contenedor-testimonio'> 

        <img 
          className='imagen-testimonio'
          src={require(`../img/testimonio-${props.imagen}.jpg`)}
          alt='Pingüino Foto'
        />
        
        <div className= 'contenedor-texto-testimonio'>
          <p className= 'nombre-testimonio'>
            <strong>{props.nombre}</strong> de {props.pais}
          </p>

          <p className= 'cargo-testimonio'>
            {props.cargo} de <strong>{props.empresa}</strong> 
          </p>

          <p className= 'texto-testimonio'>
            "{props.testimonio}" 
          </p>

        </div>

      </div>

    )
}
  
    export default Testimonio;