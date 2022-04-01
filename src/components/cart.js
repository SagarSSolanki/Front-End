import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Cart() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:3002/item_total", {
        params: { str: str },
    });
    console.log(data);
    setData(data);
  };

  const [str, setStr] = useState("");

  useEffect(() => {
    var item_value = sessionStorage.getItem("item_key");
    setStr(item_value);
    fetchData();
  });
    
  return (
      <div>
        <h1>We have {str.length == 0 ? "no items" : str} </h1>
        <h1>Total Price: {data.total_price}</h1>
      </div>
  );
}
