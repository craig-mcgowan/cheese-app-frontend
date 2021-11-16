import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
    <h1>Cheeses of the World</h1>

    <Link to="/"><button>Return Home</button></Link>  
  </header>)
};
export default Header;
