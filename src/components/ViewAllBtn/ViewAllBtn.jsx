import React from "react";
import { Link } from "react-router-dom";
import "./ViewAllBtn.scss";

export default function ViewAllBtn() {
  return (
    <div>
      <Link to="/billionaires">
        <button className='btn btn--move'><h2>VIEW ALL BILLIONAIRES</h2></button>
      </Link>
    </div>
  );
}
