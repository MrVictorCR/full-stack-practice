/* 
  What I've learned about React so far:
    We need to know that this React use HTML and CSS
    What happen is that in HTML I'm using HTML to call index.js
      In this case index.js has a 'root', this root will be to call App.js
      In App.js is where we have everything that would appear in the HTML page
      Also in App.js we can add another .JSX file, where we can work or do whatever that we want
    
    So, in this file "Component.jsx" I've learned that I could work with Components, for example the input and the button that I created
    And in order for this components to work I need {useState} = useState is the "State" that the component use.
      I need it if I want the the component do something.
    
    So far that what I've learned regarding .jsx
    With this I'm going to start
    
*/

import React, {useState} from 'react'

export default function Component() {

  const [text, setText] = useState()
  const [updated, setUpdated] = useState()

  const textOnChange = (event) => {
    setText(event.target.value)
  }

  const buttonOnClick = () => {
    setUpdated(text)
  }

  return (
    <div>
      
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={buttonOnClick}>Actualizar</button>
      <p>Texto Input: {text}</p>
      <p>Texto Actualizado: {updated}</p>



    </div>
  )
}
