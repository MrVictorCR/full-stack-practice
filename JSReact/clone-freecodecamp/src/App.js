import './App.css';
import Testimonio from './Components/testimonio';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>¿Por qué deberías estudiar para ser un FullStack?</h1>
        <Testimonio 
          nombre='Pingüino'
          pais='Madagascar'
          imagen='uno'
          cargo='Programador de React'
          empresa='SVS'
          testimonio='Soy un Pingüino de Madagascar el cual siempre soñó con salir a una aventura, lo cual me llevó al punto en el que me encuentro ahora que es viajando alrededor del mundo, todo esto ha sido posible gracias a que he aprendido a utilizar React!'  />
        <Testimonio 
          nombre='Gato'
          pais='Gatolandia'
          imagen='dos'
          cargo='Programador FullStack'
          empresa='SVS'
          testimonio='Siempre había soñado con programar una página web, lo cual me llevó a investigar todo lo relacionado con el área, quería saber más sobre este mundo y sus cualidades, gracias a esto he podido convertirme en un programador fullstack, aún sigo aprendiendo ya que cada día hay una nueva forma de hacer los proyectos, eso me motiva más a segur adelante!' />
        <Testimonio 
          nombre='Victor'
          pais='Costa Rica'
          imagen='tres'
          cargo='Programador FullStack Junior'
          empresa='SVS'
          testimonio='Ingresé al mundo de programación en el 2021, he estado buscando mi pasión y he llegado al punto que deseaba, React, haber conocido de esta tecnología me ha abierto las posibilidades para seguir creciendo en lo que me gusta, gracias a esto puedo seguir en este mundo haciendo lo que me gusta de una manera divertida!'    />       
      </div>
    </div>
  );
}

export default App;
