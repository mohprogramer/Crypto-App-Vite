import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";

const HomePage = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() =>{
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en")
        .then(res => res.json())
        .then(data => setCoins(data))
    }, [])

    return (
        <div>
            <TableCoin data={coins} />
        </div>
    );
};

export default HomePage;