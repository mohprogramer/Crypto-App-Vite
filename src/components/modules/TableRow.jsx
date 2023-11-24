//Chart
import chartUp from "../../asset/chart-up.svg";
import chartDown from "../../asset/chart-down.svg";
//Styles
import styles from "./TableRow.module.css";

function TableRow({ coin, currency }) {
  const {
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  } = coin;

  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
     <td>{currency.symbol}{current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{currency.symbol}{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
}

export default TableRow;
