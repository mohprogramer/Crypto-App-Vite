import { useEffect, useState } from "react";
import { searchCoin } from "../../services/cryptoAPI";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const notify = () =>
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

  useEffect(() => {
    setCoins([]);
    const controller = new AbortController();
    if (!text) {
      setIsLoading(false);
      return;
    }
    const search = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) setCoins(json.coins);
        setIsLoading(false);
        console.log(json);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
          notify(error);
        }
      }
    };

    search();
    return () => controller.abort();
  }, [text]);

  const changeHandler = (e) => {
    if (e.target.value === "usd") {
      setCurrency({ name: "usd", symbol: "$" });
    } else if (e.target.value === "eur") {
      setCurrency({ name: "eur", symbol: "€" });
    } else if (e.target.value === "jpy") {
      setCurrency({ name: "jpy", symbol: "¥" });
    }
  };

  return (
    <div>
      <ToastContainer />
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency.name} onChange={changeHandler}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      <div>
        <ul>
          {isLoading && (
            <TailSpin
              width="50px"
              height="50px"
              strokeWidth="2"
              color="#3874ff"
            />
          )}
          {coins.map((coin) => (
            <li key={coin.id}>
              <img src={coin.thumb} alt={coin.name} />
              <p>{coin.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
