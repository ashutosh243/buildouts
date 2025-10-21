import React, { useEffect, useState } from 'react'
import Card from './Card'
import './App.css';
import axios from 'axios';



// c835c3e1a6624ff3be152534230108
const App=()=>{
   
  const [data,setData]=useState("");
  const [searchData,setSearchData]=useState("");
  const [apiResponse,setResponse]=useState({Temperature:"",Humidity:"",Condition:"",'Wind speed':""});
  const unit={Temperature:'°C',Humidity:'%','Wind speed':'Kph', Condition:''}
  const handleChange=(e)=>{
    setData(()=>{return e.target.value});
  }
  const handleClick=()=>{
    setSearchData(()=>{return data});
    setData("");
  }
  useEffect(()=>{
     async function makeCall(){

        const response=await axios.get(`https://api.weatherapi.com/v1/current.json?key=c835c3e1a6624ff3be152534230108&q=${searchData}`);
        console.log(response.data); 
        const obj={
          Temperature:response.data.current.temp_c,
          Humidity:response.data.current.humidity,
          Condition:response.data.current.condition.text,
          'Wind speed':response.data.current.wind_kph
        }
        console.log(obj);
        setResponse(obj);

     }
     makeCall();
  },[searchData]);
  
  console.log(apiResponse);
  console.log(apiResponse.Temperature);
  return(<>
     <div className="container">
       <input onChange={handleChange} type="text" placeholder='Enter city name' value={data}/>
       <button onClick={handleClick}>Search</button>
       <div className="weather-cards">
          {Object.keys(apiResponse).length===0?<p>Loading data...</p>:(
                
                Object.keys(apiResponse).map((key,index)=>{

                   return <Card key={index} name={key} data={apiResponse[key]} unit={unit[key]}></Card>

                })
          )}
          
       </div>
     </div>
  </>)
}

export default App