import React, {useState, useEffect} from 'react'
import './index.css'

function App() {

  const [api, setApi] = useState()
  const [next, setNext] = useState(false)

useEffect ( () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => setApi(data.message))
}, [next] )

const siguiente = () => {
  setNext(!next)
}

  return (
    <div className="App">
      <button type='button' onClick={siguiente}>Next</button>
      <img src={api} className="img-fluid" alt="f"/>
    </div>
  );
}

export default App;
