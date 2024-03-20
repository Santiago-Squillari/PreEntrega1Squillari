import React from 'react'

const ItemListContainer = (props) => {
 
  return (
    <div>
      <ul>
        <li>{props.comida_1}</li>
        <li>{props.comida_2}</li>
        <li>{props.comida_3}</li>
      </ul>
    </div>
  )
}

export default ItemListContainer