import {useState} from 'react';
import './App.css';

function App() {

  const [randomColors, setRandomColors] = useState(null)
  const [userChoice, setUserChoice] = useState('rgb(255,255,255)')
  const [saveChoice1, setSaveChoice1] = useState('rgb(255,255,255)')
  const [saveChoice2, setSaveChoice2] = useState('rgb(255,255,255)')
  const [saveChoice3, setSaveChoice3] = useState('rgb(255,255,255)')

  const generateColors = () => {
    let randomRGBS = []
    for (let i=0; i<64; i++) {
      let rgb = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255),
      }
      randomRGBS.push(rgb)
    }
    
    let x =randomRGBS.map(({r, g, b}, index) => {
      let y = <div 
        className='random-color'
        style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}} 
        key={index}
        onClick={handleUserChoice}>
      </div>
      return (y)
    })

    return(x)
  }

  const getSelectedColor = (event) => {
    return (event.target.style.backgroundColor)
  }

  const handleRandomize = () => {
    setRandomColors(generateColors())
  }

  const handleUserChoice = (event) => {
    setUserChoice(getSelectedColor(event))
  }

  const handleSaveChoice1 = (event) => {
    setSaveChoice1(userChoice)
  }

  const handleSaveChoice2 = (event) => {
    setSaveChoice2(userChoice)
  }

  const handleSaveChoice3 = (event) => {
    setSaveChoice3(userChoice)
  }
  
  const handleSave = {}

  return (
    <div className='app'>
      <h1> Color Picker </h1>
      <div className='random-colors'>
        {randomColors}
      </div>
      <div className='choice-display'>
        <h2>Current Choice: </h2>
        <div className='choice' style={{backgroundColor: `${userChoice}`}}></div>
      </div>
      <input type="button" value="generate new colors" onClick={handleRandomize} />
      <div className='saved-colors'>
        <div 
          className='saved-color' 
          id='saved1' 
          style={{backgroundColor: `${saveChoice1}`}}
          onClick={handleSaveChoice1}>
        </div>
        <div 
          className='saved-color' 
          id='saved2' 
          style={{backgroundColor: `${saveChoice2}`}}
          onClick={handleSaveChoice2}>
        </div>
        <div 
          className='saved-color' 
          id='saved3' 
          style={{backgroundColor: `${saveChoice3}`}}
          onClick={handleSaveChoice3}></div>
      </div>

    </div>
  );
}

export default App;
