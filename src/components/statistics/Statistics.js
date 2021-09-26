import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title = 'Upload stats', stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(elt => (
          <li className={s.item} key={elt.id}>
            <span className={s.label}>{elt.label}</span>
            <span className={s.percentage}>{elt.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
