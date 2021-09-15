import PropTypes from 'prop-types';

const Button = ({ type, value, onclick }) => (
  <button type="button" className={type} onClick={onclick}>
    {value}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Button;
