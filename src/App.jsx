import { useState } from 'react'
import './App.css'
import { Search } from './Components/Search'
import { Show } from './Components/Show'

function App() {
  const [country, setCountry] = useState([])

  return (
    <>
      <h1>Buscador de países</h1>

      <Search setCountry={setCountry} setError={setError}/>
      
      <Show countries={countries} error={error}/>
    </>
  )
}

export default App
