import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../features/counter/strSlice'


export default function Product() {

  const hash = useSelector(state => state.hash.value)
  console.log(hash)
  const dispatch = useDispatch()
  
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
    

  return (
    <div className="App">
      <h1 style={{ color: "pink" }}>Available Products</h1>
      {data.map((item) => 
        <div key={item.id}> 
          <div>{item.name}</div> 
          <div>Price : {item.price} $ </div> 
          {hash[item.code] > 0 ? 
            <div> 
              <button onClick={() => dispatch(addItem(item.code))}>Add</button> 
              <button onClick={() => dispatch(removeItem(item.code))}>Remove</button> 
            </div>: 
            <button onClick={() => dispatch(addItem(item.code))}>Add</button>}
        </div>
      )}
      <br></br>
      <Link to="/cart">
        <button style={{ backgroundColor: "white" }}>
          View Cart!
        </button>
      </Link>
    </div>
  );
}
