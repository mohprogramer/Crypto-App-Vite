import { useState } from "react";
import { converter } from "../../helpers/convertData";
import styles from "./Chart.module.css";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("market_caps");
   console.log(converter(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}></div>
    </div>
  );
}

export default Chart;
