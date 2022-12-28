import { useState } from "react";

function App() {
  const [amount, setAmount] = useState<number>(0);

  return (
    <div className="wrapper">
      <div className="amount">
        <sup>$</sup>
        <span className="dollars">{amount.toFixed(2)}</span>
      </div>
      <input
        type="range"
        id="priceRange"
        min="0"
        max="100"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <br />
      <button
        onClick={() => {
          alert(`The price is ${amount.toFixed(2)}`);
        }}
      >
        Buy Now
      </button>
      <script src="app.js"></script>
    </div>
  );
}

export default App;
