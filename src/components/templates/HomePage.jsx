import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCryptoList } from "../../services/cryptoAPI";

const HomePage = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() =>{

        const getData = async () => {
            const res = await fetch(getCryptoList());
            const json  = await res.json();
            setCoins(json)
        }

        getData();
        console.log(coins)
    }, [])

    return (
        <div>
            <TableCoin data={coins} />
        </div>
    );
};

export default HomePage;