export const Countries = ({ countries }) => {
    console.log(countries,"Componentes ShowCountries")
 return <>
    <h2>Resultado</h2>
    {countries.map((element,index) => {
        return <div key={index}>
        <h3>{element.name.common}</h3>
        <h4>{element.capital ? element.capital[0]: "No tiene capital"}</h4>
        <h4>{element.population}</h4>
        <img src={element.flags.svg} height={50} alt="" />
      </div>
    
    })}
 </>
}
        
