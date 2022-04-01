import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from "react-router-dom"


export default function Product() {
  
  const [str, setStr] = React.useState("");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      "http://localhost:3002/products"
    );
    console.log(data);
    setData(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);


  const products = data.map((data) => <div> 
    <h3 key={data.id}>{data.name}</h3> <a key={data.id}>Price : {data.price} $ </a> <button onClick={() => setStr(str.length == 0 ? data.code : str.concat(", " + data.code))}>Add to Cart!</button> 
    </div>);

  return (
    <div className="App">
      <h1>Available Products</h1>
      <h3>You have selected {str}</h3>
      <p>
        <strong>{products}</strong>
      </p>
      <br></br>
      <Link to="/cart">
        <button onClick={() => sessionStorage.setItem("item_key", str)}>
          View Cart!
        </button>
      </Link>
    </div>
  );
}
