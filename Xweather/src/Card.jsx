import React from 'react'

const Card=({name,data,unit})=>{

  return(<>
    <div className='weather-card'>
        <p className='name'>{name}</p>
        <div className='data'>
            <p>{data}</p>
            <p>{unit}</p>
        </div>
    </div>
  </>);
  
}

export default Card;