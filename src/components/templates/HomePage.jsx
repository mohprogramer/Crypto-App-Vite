import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCryptoList } from "../../services/cryptoAPI";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState({name:"usd", symbol:"$"});

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(getCryptoList(page, currency));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
    console.log(coins);
  }, [page, currency]);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin data={coins} isLoading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
