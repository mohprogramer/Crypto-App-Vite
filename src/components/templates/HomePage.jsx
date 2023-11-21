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

    function onlineHandler() {
      setIsOnline(true);
    }

    function offlineHandler() {
      setIsOnline(false);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, [page]);

  return (
    <div>
      {isOnline ? (
        <>
          <Pagination page={page} setPage={setPage} />
          <TableCoin data={coins} isLoading={isLoading} />
        </>
      ) : (
        <p>You are offline. Please check your internet connection.</p>
      )}
    </div>
  );
};

export default HomePage;
