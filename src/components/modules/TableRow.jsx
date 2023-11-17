import chartUp from '../../asset/chart-up.svg'
import chartDown from '../../asset/chart-down.svg'

function TableRow({coin}) {

    const {name, image, symbol, total_volume, current_price, price_change_percentage_24h:price_change} = coin

    return (
        
                <tr>
                    <td>
                        <div>
                            <img src={image} alt={name} />
                            <span>{symbol.toUpperCase()}</span>
                        </div>
                    </td>
                    <td>${current_price.toLocaleString()}</td>
                    <td>{price_change.toFixed(2)}%</td>
                    <td>${total_volume.toLocaleString()}</td>
                    <td><img src={price_change > 0 ? chartUp : chartDown} alt={name} /></td>
                </tr>
        
    );
}

export default TableRow;