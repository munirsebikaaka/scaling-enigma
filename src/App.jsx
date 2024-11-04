import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [numP, setNumP] = useState("");
  const [bill, setBill] = useState("");
  const [error, setErorr] = useState("");
  const [tip, setTip] = useState("0.00");
  const [totalA, setTotalA] = useState("0.00");
  const [er, setEr] = useState(false);

  const getTip = (tipP) => {
    if (tipP && bill && numP) {
      const totalTip = bill * (tipP / 100);
      const tipPerPerson = totalTip / numP;
      setTip(tipPerPerson);
      const billsALL = bill / numP;
      const billPerPerson = billsALL + tipPerPerson;
      setTotalA(billPerPerson);
    } else if (numP <= 0) {
      setErorr(`Can't be zero`);
    } else if (numP > 0) {
      setErorr("");
    }
    if (numP > 0) setEr(true);
  };

  const resetApp = () => {
    setBill(0);
    setErorr("");
    setNumP("");
    setBill("");
    setTotalA("0.00");
    setTip("0.00");
  };

  return (
    <div className={styles.mainApp}>
      <div>
        <div>
          <p className={styles.bill}>Bill</p>
          <input
            className={styles.inputs}
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
        <div>
          <p className={styles.billStip}>Select Tip %</p>
          <>
            <div className={styles.controlBtns}>
              <button className={styles.btn} onClick={() => getTip(5)}>
                05%
              </button>
              <button className={styles.btn} onClick={() => getTip(10)}>
                10%
              </button>
              <button className={styles.btn} onClick={() => getTip(15)}>
                15%
              </button>
            </div>
            <div className={styles.controlBtns}>
              <button className={styles.btn} onClick={() => getTip(25)}>
                25%
              </button>
              <button className={styles.btn} onClick={() => getTip(50)}>
                50%
              </button>
              <button className={styles.btn2}>40</button>
            </div>
          </>
        </div>
        <div>
          <div className={styles.people}>
            <p>Number of People</p>
            <p className={styles.error}>{error}</p>
          </div>
          <input
            className={er ? styles.error2 : styles.inputs}
            // {!er ? "error2" : ""}
            type="number"
            value={numP}
            onChange={(e) => setNumP(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.amountCell}>
        <div>
          <div className={styles.amounts}>
            <p className={styles.palAmount}>
              Tip Amount <span>/person</span>
            </p>
            <p className={styles.tip}> ${tip}</p>
          </div>
          <div className={styles.amounts}>
            <p className={styles.palAmount}>
              Total Amount <span>/person</span>
            </p>
            <p className={styles.tip}> ${totalA}</p>
          </div>
        </div>
        <button onClick={resetApp}>reset</button>
      </div>
    </div>
  );
}

export default App;
