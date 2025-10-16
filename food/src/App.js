import { useState } from "react";

function FavoriteFoods() {
  const foods = ["protien", "eggs", "red meet", "beef", "chicken"];
  const [message, setMessage] = useState("Select a food that you love!");

  function handleClick(food) {
    setMessage(`I love ${food}!`);
  }

  return (
    <div>
      <h1>My Favorite Foods</h1>

      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food} <button onClick={() => handleClick(food)}>Click Me</button>
          </li>
        ))}
      </ul>

      <h3>{message}</h3>
    </div>
  );
}

export default FavoriteFoods;
