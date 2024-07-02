

import React, { useState } from "react";
import './../styles/App.css';


const App = () => {
  
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [input, setInput] = useState("");

  const productComp = () => { 
    const SearchFruits = fruits.filter((item) =>
      item.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
      .map((item) => { 
        return <li>{item}</li>;
      })
      return SearchFruits
  }

  return (
    <div>
      <h1>Search item</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <ul>
        <li>{productComp()}</li>
      </ul>
    </div>
  )
}

export default App
