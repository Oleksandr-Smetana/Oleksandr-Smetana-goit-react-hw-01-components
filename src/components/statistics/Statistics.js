import PropTypes from 'prop-types';
import './statistics.css';

export default function Statistics({ title = 'Upload stats', stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(elt => (
          <li className="item" key={elt.id}>
            <span className="label">{elt.label}</span>
            <span className="percentage">{elt.percentage}</span>
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
