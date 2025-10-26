import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const [data, setData] = useState([]);
  const [page, setPageNumber] = useState(1);
  const [pageData, setPageData] = useState([]);
  const itemsPerPage = 10;

  const nextHandler = () => {
    setPageNumber((prev) => { return prev + 1 });
  }
  const prevHandler = () => {
    setPageNumber((prev) => { return prev - 1 });
  }
  useEffect(() => {
    async function getData() {

      try{
        const response = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
        setData(() => response.data);
      } 
      catch(e)
      {
        console.log(e);
        alert("failed to fetch data");
      }
    } 
    getData();
  }, []);
  useEffect(() => {
    const newdata = data.slice(itemsPerPage * (page - 1), page * itemsPerPage); //to include end as well +1
    setPageData(newdata);
  }, [page,data]);

  return (<>
    <table className='tbl'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {
          pageData.map((d) => {
            return <tr>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.role}</td>
            </tr>
          })
        }
      </tbody>
    </table>
    <div className='btns'>
      <button onClick={prevHandler}>Previous</button>
      <div>{page}</div>
      <button onClick={nextHandler}>Next</button>
    </div>
  </>);
}

export default App;