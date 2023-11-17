import TableRow from "./TableRow";

const TableCoin = ({data, isLoading}) => {
    return (
        <div>
           {isLoading ? <p>Loading...</p> :  <table>
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
                    {data.map(item =>
                        <TableRow key={item.id} coin={item} /> )}
                </tbody>
            </table>}
        </div>
    );
};

export default TableCoin;




