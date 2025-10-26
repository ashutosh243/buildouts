import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import axios from 'axios';

const Search=()=> {
  
  const [Data,setData]=useState([]);
  const [filterData,setFilterData]=useState([]);
  const [searchText,setSearchText]=useState("");

  useEffect(()=>{
    async function fetchCountry(){
       const response=await axios.get('https://countries-search-data-prod-812920491762.asia-south1.run.app/countries');
       setData(()=>{return response.data});
       setFilterData(()=>{return response.data});
    }
    fetchCountry();
  },[]);
  
  const handleChange=(e)=>{
    const searchText=e.target.value;
    setSearchText(searchText.toLowerCase());
    const newdata=Data.filter((d)=>{
      const arr=d.common.split(' ');
      for(let elements of arr)
      {
        if(elements.toLowerCase().startsWith(searchText))return true;
      }
      return false;
    });
    setFilterData(newdata);
  }
  return (<>    
     <div className='search'>
      <input value={searchText} onChange={handleChange} type="text" placeholder='search country'/>
     </div>
     <div className='container'>
      {
        filterData?.map((d,index)=>{return <Card key={index} link={d.png} name={d.common}></Card>})
      }
     </div>
  </>)
}

export default Search;