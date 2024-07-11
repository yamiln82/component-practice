import React from 'react'

export const SecondComponent = () => {
    const books = [
        "Harry Potter y la piedra filosofal",
        "Harry Potter y la camara secreta",
        "Harry Potter y el prisionero de Azkaban",
        "Harry Potter y el cáliz de fuego", 
        "Harry Potter y la Orden del Fénix",
        "Harry Potter y el misterio del principe",
        "Harry Potter y las reliquias de la muerte"
];
  return (
    <div>
         <h2>Listado de Libros</h2>
      <ul>
        { 
            books.length >= 1 ?
                (
                    books.map((book, index) =>  {
                    return <li key ={ index } > { book }</li>
                    })
                ) : "No existen libros."
         }
      </ul>
      
    </div>
  )
}

export default SecondComponent
