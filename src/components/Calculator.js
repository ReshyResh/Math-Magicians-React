import Button from './Button';
import Title from './Title';
import Results from './Results';

const Calculator = () => (
  <>
    <Title value="Math Magicians" />
    <div className="container">
      <Results />
      <Button type="but digit" value="AC" />
      <Button type="but digit" value="+/-" />
      <Button type="but digit" value="%" />
      <Button type="but operator" value="+" />
      <Button type="but digit" value="7" />
      <Button type="but digit" value="8" />
      <Button type="but digit" value="9" />
      <Button type="but operator" value="x" />
      <Button type="but digit" value="4" />
      <Button type="but digit" value="5" />
      <Button type="but digit" value="6" />
      <Button type="but operator" value="-" />
      <Button type="but digit" value="1" />
      <Button type="but digit" value="2" />
      <Button type="but digit" value="3" />
      <Button type="but operator" value="+" />
      <Button type="but digit double" value="0" />
      <Button type="but digit" value="." />
      <Button type="but operator" value="=" />
    </div>
  </>
);

export default Calculator;
