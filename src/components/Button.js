/* eslint-disable react/prop-types */
const Button = ({ type, value, onclick }) => (<button type="button" className={type} onClick={onclick}>{value}</button>);
export default Button;
