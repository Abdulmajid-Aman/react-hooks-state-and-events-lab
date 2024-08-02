import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
let [background, setBackground] = useState(false)
const newColor = () => {
  setBackground((background) => !background)
  console.log(background);
}
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = background? "App dark" : "App light"
  console.log(appClass);

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={newColor}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
