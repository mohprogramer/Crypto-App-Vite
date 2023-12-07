import { useState } from "react";
import { converter } from "../../helpers/convertData";
//Rechart
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
//Styles
import styles from "./Chart.module.css";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  console.log(converter(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={400} data={converter(chart, type)}>
              <Line
                type="monotone"
                dataKey={type}
                stroke="#3874ff"
                strokeWidth="2px"
              />
              <CartesianGrid stroke="#404042" />
              <YAxis dataKey={type} domain={["auto", "auto"]} />
              <Legend />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Chart;
