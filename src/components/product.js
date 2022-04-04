import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"


export default function Product() {
  
  const [str, setStr] = useState(localStorage.getItem("item_key") || '');
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      "http://localhost:3002/products"
    );
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const makeString = (item) => {
    setStr(str.length === 0 ? item.code : str.concat(", " + item.code))
  }
    

  return (
    <div className="App">
      <h1>Available Products</h1>
      <h3>You have selected {str}</h3>
      {data.map((item) => 
        <div key={item.id}> 
          <div>{item.name}</div> 
          <div>Price : {item.price} $ </div> 
          <button onClick={() => makeString(item)}>Add to Cart!</button> 
        </div>
      )}
      <br></br>
      <Link to="/cart">
        <button onClick={() => localStorage.setItem("item_key", str)}>
          View Cart!
        </button>
      </Link>
    </div>
  );
}
