import React from 'react'
import PropTypes from 'prop-types'


export const ThirdComponent = ({name, lastName, card}) => {
  return (
    <div>
       <h2>Comunicacion entre componentes</h2>
        <ul>
          <li>{name }</li>   
          <li>{lastName }</li> 
          <li>{card.heigth}</li>  
          <li>{card.bloodGroup }</li>  
          <li>{card.allergies }</li>   
        </ul> 
    </div>
  )
}
ThirdComponent.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    card: PropTypes.object
  }
  



