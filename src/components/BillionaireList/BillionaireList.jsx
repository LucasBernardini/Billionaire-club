import React from "react";
import "./BillionaireList.scss";
export default function BillionaireList({ info }) {
  return (
    <div className="bills">
      {info &&
        info.map((richie) => {
          return (
            <div key={richie.person.name} className="billionaires">
              <div className="billionaires__container--photo">
                <img
                  className="billionaires__photo"
                  src={`https:${richie.person.squareImage}`}
                  alt=""
                />
              </div>
              <div className="billionaires__container--info">
                <h2>{richie.person.name}</h2>
                <p>Net worth: ${richie.finalWorth * 1000000}</p>
                <p>Industry: {richie.industries}</p>
                <p>Source of wealth: {richie.source}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
