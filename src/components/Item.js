import React, { useState} from "react";

function Item({ name, category }) {
  const [buy, setBuy] = useState(false)
  function handleClick() {
    console.log("Button was clicked!!!");
    setBuy((buy) => !buy)
    console.log(buy);
    
  }
  return (
    <li className={buy ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buy ? "Remove to cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
