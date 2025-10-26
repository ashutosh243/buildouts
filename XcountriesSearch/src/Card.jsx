import React from 'react'

const Card=({link,name})=>{
  return (
    <div className='countryCard'>
       <img src={link} alt="" />
       <h2>{name}</h2>
    </div>
  )
}

export default Card