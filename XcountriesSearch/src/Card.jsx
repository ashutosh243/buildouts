import React from 'react'

const Card=({link,name})=>{
  return (
    <div className='countryCard'>
       <img src={link} alt="" />
       <h1>{name}</h1>
    </div>
  )
}

export default Card