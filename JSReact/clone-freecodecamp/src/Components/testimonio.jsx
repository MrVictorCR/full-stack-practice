import React from "react";
import '../stylessheet/testimonio.css';

  function Testimonio(){
    return(
      <div className= 'contenedor-testimonio'> 

        <img 
          className='imagen-testimonio'
          src={require('../img/testimonio-uno.jpg')}
          alt='Pingüino Foto'
        />
        
        <div className= 'contenedor-texto-testimonio'>
          <p className= 'nombre-testimonio'>Pingüino de Madagascar</p>
          <p className= 'cargo-testimonio'>Pingüino</p>
          <p className= 'texto-testimonio'>"Soy un Pingüino de Madagascar el cual siempre soñó con salir a una aventura, lo cual me llevó al punto en el que me encuentro ahora que es viajando alrededor del mundo, todo esto ha sido posible gracias a que he aprendido a utilizar React!"</p>

        </div>

      </div>

    )
}
  
    export default Testimonio;