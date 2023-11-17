import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCryptoList } from "../../services/cryptoAPI";

const HomePage = () => {

    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{

        const getData = async () => {
            const res = await fetch(getCryptoList());
            const json  = await res.json();
            setCoins(json)
            setIsLoading(false)
        }

        getData();
        console.log(coins)
    }, [])

    return (
        <div>
            <TableCoin data={coins} isLoading={isLoading} />
        </div>
    );
};

export default HomePage;