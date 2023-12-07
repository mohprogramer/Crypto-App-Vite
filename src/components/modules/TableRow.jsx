//Chart
import chartUp from "../../asset/chart-up.svg";
import chartDown from "../../asset/chart-down.svg";
//Styles
import styles from "./TableRow.module.css";
//API
import { marketCahrt } from "../../services/cryptoAPI";
//Notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TableRow({ coin, currency, setChart }) {
  const {
    id,
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  } = coin;

  const showHandler = async () => {
    try {
      const res = await fetch(marketCahrt(id));
      const json = await res.json();
      setChart(json);
    } catch (error) {
      setChart(null);
      notify(error);
    }
  };

  const notify = (error) =>
    toast.error(`😕 ${error} `, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <ToastContainer />
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currency.symbol}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>
        {currency.symbol}
        {total_volume.toLocaleString()}
      </td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
}

export default TableRow;
