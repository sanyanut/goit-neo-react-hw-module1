import PropTypes from 'prop-types';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.table_head}>
        <tr className={css.table_head__row}>
          <th className={css.table_head__header}>Type</th>
          <th className={css.table_head__header}>Amount</th>
          <th className={css.table_head__header}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.table_body}>
        {items.map(item => {
          return (
            <TransactionHistoryItem
              key={item.id}
              id={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.PropTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
