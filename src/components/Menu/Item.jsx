import React from 'react'

const Item = ({item}) => {
  return (
    <div>
       <h1 className="titulo">{item.name}</h1>
        <p>{item.description}</p>
        <p>By {item.price}</p> 
    </div>
  )
}

export default Item