import React from "react";
import { Link } from "react-router-dom";
import "./ViewAllBtn.scss";

export default function ViewAllBtn() {
  return (
    <div>
      <Link to="/billionaires">
        <button>VIEW ALL BILLIONAIRES</button>
      </Link>
    </div>
  );
}
