import React from "react";

export default function BillionaireHero({ info }) {
  return (
    <div>
      <h2>NAME: {info[0].person.name}</h2>
      <p>NETWORTH: {info[0].finalWorth}</p>
      <p>INDUSTRY: {info[0].industries}</p>
      <p>RANK: {info[0].rank}</p>
    </div>
  );
}
