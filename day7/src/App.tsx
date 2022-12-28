import { useState } from "react";

function App() {
  const [billAmount, setBillAmount] = useState<string>("0.00");
  const [billAmountError, setBillAmountError] = useState<string>("");
  const [people, setPeople] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0);

  const changeBillAmount = (amount: string) => {
    const isValid = amount.indexOf(".") === amount.lastIndexOf(".");
    if (isValid && !isNaN(Number(amount))) {
      setBillAmountError("");
      setBillAmount(amount);
    } else {
      setBillAmountError("Invalid Dollar Amount!");
    }
  };

  const calculate = () => {
    const bill = Number(billAmount);
    const tip = bill * (tipPercentage / 100);
    setTipAmount(tip);
    const total = bill + tip;
    setTotalPerPerson(Math.round(total / people));
  };

  return (
    <div className="wrapper">
      <div className="tip-amount">
        <div className="label">Tip Amount</div>
        <div className="dollars">
          <sup>$</sup>
          <span id="tip-amount">{tipAmount.toFixed(2) || 0.0}</span>
        </div>
      </div>
      <div className="total-per-person">
        <div className="label">Total Per Person</div>
        <div className="dollars">
          <sup>$</sup>
          <span id="total-per-person">{totalPerPerson.toFixed(2) || 0}</span>
        </div>
      </div>

      <div className="input-fields">
        <div className="bill-amount">
          {billAmountError !== "" && (
            <span role="alert">{billAmountError}</span>
          )}
          <div className="field">
            <input
              type="text"
              id="bill-amount"
              name="bill-amount"
              value={billAmount || "0.00"}
              onChange={(e) => changeBillAmount(e.target.value)}
            />
          </div>
          <div className="label">Bill Amount</div>
        </div>
        <div className="number-of-people">
          <div className="field">
            <input
              type="text"
              id="number-of-people"
              name="number-of-people"
              value={people || 0}
              onChange={(e) => setPeople(Number(e.target.value))}
            />
          </div>
          <div className="label">Number of People</div>
        </div>
      </div>

      <div className="tip-percentages">
        <div>
          <input
            type="radio"
            name="tip"
            value="5%"
            id="five-percent"
            onClick={() => setTipPercentage(5)}
          />
          <label htmlFor="five-percent">5%</label>
        </div>
        <div>
          <input
            type="radio"
            name="tip"
            value="10%"
            id="ten-percent"
            onClick={() => setTipPercentage(10)}
          />
          <label htmlFor="ten-percent">10%</label>
        </div>
        <div>
          <input
            type="radio"
            name="tip"
            value="15%"
            id="fifteen-percent"
            onClick={() => setTipPercentage(15)}
          />
          <label htmlFor="fifteen-percent">15%</label>
        </div>
        <div>
          <input
            type="radio"
            name="tip"
            value="20%"
            id="twenty-percent"
            onClick={() => setTipPercentage(20)}
          />
          <label htmlFor="twenty-percent">20%</label>
        </div>
      </div>
      <div className="button-wrapper">
        <button id="calculate" onClick={() => calculate()}>
          Calculate
        </button>
      </div>
    </div>
  );
}

export default App;
