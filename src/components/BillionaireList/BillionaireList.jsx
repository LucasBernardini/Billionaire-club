import React from "react";

export default function BillionaireList({ info }) {
  return (
    <div>
      {info &&
        info.map((richie) => {
          return <div key={richie.person.name}>
            <h2>{richie.person.name}</h2>
            <img src={`https:${richie.person.squareImage}`} alt=""/>
            <p>Net worth: ${(richie.finalWorth) * 1000000}</p>
            <p>Industry: {richie.industries}</p>
            <p>Source of wealth: {richie.source}</p>
          </div>;
        })}
    </div>
  );
}
