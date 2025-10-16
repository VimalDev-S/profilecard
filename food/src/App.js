function App() {
  const foods = ["protein", "eggs", "red meat", "beef", "chicken"];

  function handleClick(food) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = `I love ${food}!`;
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

      <h3 id="message">Select a food that you love!</h3>
    </div>
  );
}

export default App;
