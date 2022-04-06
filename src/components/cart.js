import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

export default function Cart() {
  const [data, setData] = useState([]);
  const hash = useSelector(state => state.hash.value)
  
  const makeString = () => {
    let str = ""
    for (const [key, value] of Object.entries(hash)) {
      for(let i = 0;i<value;i++)
        str = str === "" ? key : str.concat(", " + key)
    }
    return str;
  }

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:3002/discounts", {
        params: { items: makeString() },
    });
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div>
        <Link to="/product">
          <button>
            View Products!
          </button>
        </Link>
        <h1>We have {makeString().length === 0 ? "no items" : makeString()} </h1>
        <h1 style={{ color: "blue" }}>Total Price: {data.total} $</h1>
        <h2 style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: "red" }}>
          {data.sub_total} $
        </h2>
        <h2 style={{ color: "green" }}>You saved: {data.discount} $</h2>
      </div>
  );
}
