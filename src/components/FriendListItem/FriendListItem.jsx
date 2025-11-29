import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import clsx from 'clsx';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friend_item__inner}>
      <img
        className={css.friend_item__image}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.friend_item__name}>{name}</p>
      <p
        className={clsx(
          css.friend_item__status,
          isOnline ? css.online : css.offline
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

FriendListItem.PropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};

export default FriendListItem;
