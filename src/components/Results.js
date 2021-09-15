import PropTypes from 'prop-types';

const Results = ({ value }) => <p className="result">{value}</p>;

Results.propTypes = {
  value: PropTypes.number,
};

Results.defaultProps = {
  value: 0,
};

export default Results;
