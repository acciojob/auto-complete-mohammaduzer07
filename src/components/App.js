import React, { useEffect, useState } from "react";
import './../styles/App.css';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {

  const [input, setInput] = useState("");
  const [product, setProduct] = useState(fruits);

  useEffect(() => {
    setProduct(fruits.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase())
    }))
  }, [input])

  return (
    <div>
      <h1>Search item</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <ul>
        {
        product.map((item) => {
          return <li>{item}</li>
        })
      }
      </ul>
    </div>
  )
}

export default App






