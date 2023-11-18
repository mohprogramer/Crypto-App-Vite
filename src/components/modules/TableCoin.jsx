import TableRow from "./TableRow";
//Loader
import { TailSpin } from "react-loader-spinner";
//Style
import styles from "./TableCoin.module.css";

const TableCoin = ({ data, isLoading }) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <TailSpin className={styles.loader}
          height="80"
          width="80"
          color="#3874ff"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <table className={styles.table}>
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
            {data.map((item) => (
              <TableRow key={item.id} coin={item} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableCoin;
