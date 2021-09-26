import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.row}>
          <th className={s.headValue}>Type</th>
          <th className={s.headValue}>Amount</th>
          <th className={s.headValue}>Currency</th>
        </tr>
      </thead>

      {items.map(item => {
        return (
          <tbody key={item.id}>
            <tr className={s.row}>
              <td className={s.value}>{item.type}</td>
              <td className={s.value}>{item.amount}</td>
              <td className={s.value}>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
