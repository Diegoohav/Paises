import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import { Countries } from './components/Countries'

function App() {
  const [countries,setCountries] = useState([])

  console.log(countries)

  return (
    <>
      <h1>Buscador de paises</h1>
      <Search setCountries={setCountries}/>
      <Countries countries={countries}/>
    </>
  )
}

export default App
