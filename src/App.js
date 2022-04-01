import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import { Link } from "react-router-dom";
import Product from '../src/components/product'


function App() {
  return (
    <div>
      <h1>Welcome, We are at home page</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/product">List All Products!</Link> |{" "}
      </nav>
      </div>
  );
}


export default App;
