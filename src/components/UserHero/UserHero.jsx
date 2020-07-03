import React from "react";
import "./UserHero.scss";

export default function UserHero({ user, info, currentBill }) {
  
  const selectedBill = info.filter((item) => item.person.name == currentBill);
  const outputBill = (selectedBill[0] || currentBill[0] );
  
  
  const bilSal = outputBill.finalWorth * 1000000
  
  const  userSal = user.salary || 1
  
  const difference = Math.ceil(bilSal / userSal);

  console.log(bilSal * 1000000)
  console.log(userSal)
  console.log("selectedBill",selectedBill)
  console.log("currentBill",currentBill)
  console.log("outputBill",outputBill)
  console.log("username", user.name)
  
  

  return (
    <div className="user-hero">
      <h2>Hey {user.name}!</h2>
      <p>
        Based on your salary of {user.salary}, it'll take you {difference} years to make as much
        as {outputBill.person.name}!
      </p>
      <h3>GOOD LUCK!</h3>
    </div>
  );
}
