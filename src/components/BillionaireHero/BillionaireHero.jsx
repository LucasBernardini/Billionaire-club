import React from "react";
import "./billionaireHero.scss";

export default function BillionaireHero({ info, selectHandler, currentBill }) {
  const selectedBill = info.filter((item) => item.person.name == currentBill);
  const outputBill = (selectedBill[0] || currentBill[0]);

  return (
    <div className="billionaire-hero">
      <h2>NAME: {outputBill.person.name}</h2>
      <p>NETWORTH: ${outputBill.finalWorth * 1000000}</p>
      <p>INDUSTRY: {outputBill.industries}</p>
      <p>RANK: {outputBill.rank}</p>
      <form>
        <select name="billionaire" onChange={selectHandler}>
          {info.map((name) => {
            return (
              <option key={name.person.name} value={name.person.name}>
                {name.person.name}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
