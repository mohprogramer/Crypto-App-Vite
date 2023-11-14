import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCryptoList } from "../../services/cryptoAPI";

const HomePage = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() =>{
        fetch(getCryptoList())
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