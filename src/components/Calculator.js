/* eslint-disable */
import React, { Component } from 'react';
import Button from './Button';
import Title from './Title';
import Results from './Results';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cobj: {
      }
    }
    this.calc = this.calc.bind(this);
  }
  calc(n) {
    let target = n.target.innerHTML;
    this.setState(state => ({
      cobj:calculate(state.cobj, target)
    }))
  };
  render() {
    let result = '0';
    this.state.cobj.next !== null ? result = this.state.cobj.next : result = this.state.cobj.total;
    return (
      <>
        <Title value="Math Magicians" />
        <div className="container">
          <Results value={result} />
          <Button type="but digit" value='AC' onclick={this.calc} />
          <Button type="but digit" value="+/-" onclick={this.calc} />
          <Button type="but digit" value="%" onclick={this.calc} />
          <Button type="but operator" value="+" onclick={this.calc} />
          <Button type="but digit" value="7" onclick={this.calc} />
          <Button type="but digit" value="8" onclick={this.calc} />
          <Button type="but digit" value="9" onclick={this.calc} />
          <Button type="but operator" value="x" onclick={this.calc} />
          <Button type="but digit" value="4" onclick={this.calc} />
          <Button type="but digit" value="5" onclick={this.calc} />
          <Button type="but digit" value="6" onclick={this.calc} />
          <Button type="but operator" value="-" onclick={this.calc} />
          <Button type="but digit" value="1" onclick={this.calc} />
          <Button type="but digit" value="2" onclick={this.calc} />
          <Button type="but digit" value="3" onclick={this.calc} />
          <Button type="but operator" value="+" onclick={this.calc} />
          <Button type="but digit double" value="0" onclick={this.calc} />
          <Button type="but digit" value="." onclick={this.calc} />
          <Button type="but operator" value="=" onclick={this.calc} />
        </div>
      </>
    );
  }
}

export default Calculator;
