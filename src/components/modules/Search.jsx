function Search({ currency, setCurrency }) {
  const changeHandler = (e) => {
    console.log("start")
    if (e.target.value === "usd") {
      setCurrency({ name: "usd", symbol: "$" });
    } else if (e.target.value === "eur") {
      setCurrency({ name: "eur", symbol: "€" });
    } else if (e.target.value === "jpy") {
      setCurrency({name:"jpy", symbol:"¥"})
    }
  };

  return (
    <div>
      <input type="text" />
      <select value={currency.name} onChange={changeHandler}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
}

export default Search;
