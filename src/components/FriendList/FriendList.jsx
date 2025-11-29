import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(item => {
        return (
          <li className={css.friend_item} key={item.id}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

FriendList.PropTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
