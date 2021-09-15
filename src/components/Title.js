import PropTypes from 'prop-types';

const Title = ({ value }) => (<h1 className="title-h1">{value}</h1>);

Title.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Title;
