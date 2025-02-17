import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'

function App() {
  const [resultados, setResultados] = useState([])

  const getPaises = async (name) => {
  let response = await fetch("https://restcountries.com/v3.1/name/"+name)
  let data = await response.json() 
  setResultados(data)
  }

  return (
    <>
      <h1>Buscar países</h1>
      <Search getPaises={getPaises} />
    
    </>
  )
}

export default App
