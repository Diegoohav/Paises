export const Show = ({ country, error }) => {
    if(error){
        return <>
        <h2>Resultados</h2>
        <h3>No se encontro el pais</h3>
        </>
    }

    return <div>
        <h2>Resultado de búsqueda:</h2>
        {country.map((element, index) => {

            return <>
                <div className="card mb-3" key={index}>

                    <h2>{element.name.common}</h2>
                    <h4>Capital: {element.capital ? element.capital[0] : "No tiene capital"}</h4>
                    <h5>Población: {element.population}</h5>
                    <img src={element.flags.svg} className="card-img-top mt-2"width={70} height={50}  alt="" />
                </div>
            </>
        })}
    </div>




}