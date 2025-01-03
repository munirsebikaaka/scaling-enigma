import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [numP, setNumP] = useState("");
  const [bill, setBill] = useState("");
  const [error, setErorr] = useState("");
  let [tip, setTip] = useState(+"0.00");
  let [totalA, setTotalA] = useState(+"0.00");
  const [tipRange, setTipRange] = useState(0);
  const [er, setEr] = useState(false);
  const [money, setMoney] = useState("");

  const getTip = () => {
    const totalTip = bill * (tipRange / 100);
    const personTip = totalTip / numP;
    return personTip;
  };
  if (numP) tip = !money ? getTip() : "";

  const getTatol = () => {
    const cashPerPerson = bill / numP;
    const totalAmount = cashPerPerson + tip;
    return totalAmount;
  };
  if (numP) totalA = !money ? getTatol() : "";

  const getMoney = () => {
    const cashPerPerson = bill / numP;
    const total = cashPerPerson + money;
    return total;
  };
  if (numP) totalA = !tip ? getMoney() : getTatol();
  const resetApp = () => {
    setNumP("");
    setBill("");
    setTip(+"0.00");
    setTotalA(+"0.00");
    setMoney("");
  };
  return (
    <div className={styles.mainApp}>
      <div className={styles.select}>
        <div className={styles.billsCell}>
          <p className={styles.bill}>Bill</p>
          <input
            className={styles.inputs}
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
        <div className={styles.tipMainCell}>
          <p className={styles.billStip}>Select Tip %</p>
          <>
            <div className={styles.controlBtns}>
              <button className={styles.btn} onClick={() => setTipRange(5)}>
                05%
              </button>
              <button className={styles.btn} onClick={() => setTipRange(10)}>
                10%
              </button>
              <button className={styles.btn} onClick={() => setTipRange(15)}>
                15%
              </button>
            </div>
            <div className={styles.controlBtns}>
              <button className={styles.btn} onClick={() => setTipRange(25)}>
                25%
              </button>
              <button className={styles.btn} onClick={() => setTipRange(50)}>
                50%
              </button>
              <input
                className={styles.btn2}
                type="number"
                placeholder="40"
                value={money}
                onChange={(e) => setMoney(+e.target.value)}
              />
            </div>
          </>
        </div>
        <div className={styles.numPCell}>
          <div className={styles.people}>
            <p>Number of People</p>
            <p className={styles.error}>{error}</p>
          </div>
          <input
            className={!er ? styles.inputs : styles.error2}
            type="number"
            value={numP}
            onChange={(e) => setNumP(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.amountCell}>
        <div className={styles.aboutTotal}>
          <div className={styles.personCell}>
            <p className={styles.palAmount}>
              Tip Amount <span className={styles.person}>/person</span>
            </p>
            <p className={styles.palAmount}>
              Total Amount <span>/person</span>
            </p>
          </div>
          <div className={styles.tipCell}>
            <p className={styles.tip}> ${tip ? tip.toFixed(1) : "0.00"}</p>
            <p className={styles.tip}>${totalA ? totalA.toFixed(1) : "0.00"}</p>
          </div>
        </div>
        <button onClick={resetApp}>reset</button>
      </div>
    </div>
  );
}

export default App;
