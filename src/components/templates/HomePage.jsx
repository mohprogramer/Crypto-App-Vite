import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCryptoList } from "../../services/cryptoAPI";
import Pagination from "../modules/Pagination";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(getCryptoList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
    console.log(coins);

  }, [page]);

  return (
    <div>
     
          <TableCoin data={coins} isLoading={isLoading} />
          <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
