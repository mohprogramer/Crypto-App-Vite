import chartUp from '../../asset/chart-up.svg';
import chartDown from '../../asset/chart-down.svg'

const TableCoin = ({data}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Coin</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24H</th>
                        <th>Total Volume</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => <tr key={item.id} >
                        <td>
                            <div>
                                <img src={item.image} alt={item.name} />
                                <span>{item.symbol.toUpperCase()}</span>
                            </div>
                        </td>
                        <td>${item.current_price.toLocaleString()}</td>
                        <td>{item.price_change_percentage_24h.toFixed(2)}%</td>
                        <td>${item.total_volume.toLocaleString()}</td>
                        <td><img src={item.price_change_percentage_24h > 0 ? chartUp : chartDown} alt={item.name} /></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default TableCoin;