import css from './Profile.module.css';
import PropTypes from 'prop-types';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.info}>
        <img className={css.info_image} src={image} alt="User avatar" />
        <p className={css.info_name}>{name}</p>
        <p className={css.info_tag}>{tag}</p>
        <p className={css.info_location}>{location}</p>
      </div>
      <ul className={css.stats}>
        {Object.keys(stats).map((item, index) => {
          return (
            <li className={css.stats_item} key={`${item}-${index}`}>
              <span className={css.stats_item__name}>{item}</span>
              <span className={css.stats_item__count}>{stats[item]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Profile.PropTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
