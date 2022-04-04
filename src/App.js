import './App.css';
import React from 'react';
import { Link } from "react-router-dom";


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
