import './App.css';
import Button from './components/button';
import Count from './components/count';
import SVSLogo from './img/vsc-logo.jpg';
import { useState } from 'react'; // This is 'How to use hooks'

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const clickManage = () => {
    setNumClicks(numClicks + 1);
    
  }; 

  const clickReboot = () => {
    setNumClicks(0);
  }; 

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='logo'
          src={SVSLogo} 
          alt='Logo de SVS'/>
      </div>
      <div className='main-container'>

        <Count numClicks={numClicks}  />

        <Button
          text='Click'
          isClickButton={true}
          clickManage={clickManage} />
            

        <Button
          text='Reboot'
          isClickButton={false}
          clickManage={clickReboot} />
      </div>
    </div>
  );
}

export default App;
