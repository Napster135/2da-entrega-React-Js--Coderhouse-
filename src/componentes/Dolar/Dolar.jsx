import {useState,useEffect} from 'react'
export const Dolar = () => {
    const [dolar, setDolar] = useState([])
    useEffect(( ) => {
    fetch('https://criptoya.com/api/dolar') // consulta a api 
    .then(Response => Response.json()) // conversion de datos
    .then(({blue, oficial,solidario,mep} )=> {
         console.log(blue,oficial,solidario,mep)
         const esqueleto = 
         <>
         <p>Dolar Blue : ${blue}</p>
         <p>Dolar oficial : ${oficial}</p>
         <p>Dolar solidario : ${solidario}</p>
         <p>Dolar mep : ${mep}</p>
         </>
         setDolar(esqueleto)
    })
    .catch(error => console.log(error))
}, [])

    return (
        <div>
           {dolar} 
        </div>
    )
}

 