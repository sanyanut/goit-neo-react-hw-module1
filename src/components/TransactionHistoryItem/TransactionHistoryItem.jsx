import PropTypes from 'prop-types';
import css from './TransactionHistoryItem.module.css';

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={css.table_row}>
      <td className={css.table_cell}>{type}</td>
      <td className={css.table_cell}>{amount}</td>
      <td className={css.table_cell}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.PropTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
