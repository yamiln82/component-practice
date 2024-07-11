import React from 'react'

export const MyComponent = () => {

  const name = "Inés";
  const repository = "https://github.com/inesmariao/component-practice";

  const student = {
    name: "jose",
    lastName: "yamil",
    mobile: "30000000",
    linkedinProfile: "https://www.linkedin.com/in/jose-nuñez"
  }

  console.log(student);

  return (
    <div>
      <hr/> 
    <p>Este es mi primer componente</p>
    <h2> Temas de react </h2> 

    <ul>
        <li> Componentes</li>
        <li> Eventos</li>
        <li> Estados- Hooks</li>
        <li> Comunicacion</li>
    </ul>
    <hr/> 
    <h2>Datos del Docente</h2>
    <p>Nombre : {name}</p>
    <p>{repository}</p>

    <hr />
        <h2>Datos del estudiante</h2>
        <p>Nombre: { student.name }</p>
        <p>Apellido: { student.lastName }</p>
        <p>Celular: { student.mobile }</p>
        <p>Perfil de LinkedIn:</p>
        <p>{ student.linkedinProfile }</p>

    </div>
  )
}
