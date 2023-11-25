import { useEffect, useState } from "react";
import { searchCoin } from "../../services/cryptoAPI";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([])

  useEffect(() => {
    if(!text) return;
    const search = async () => {
      const res = await fetch(searchCoin(text));
      const json = await res.json();
      console.log(json);
      if(json.coins) setCoins(json.coins)
    };

    search();
  }, [text]);

  const changeHandler = (e) => {
    console.log("start");
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
    </div>
  );
}

export default Search;
