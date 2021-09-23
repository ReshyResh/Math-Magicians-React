/* eslint-disable */
import React, { useState, Component } from 'react';
import Button from './Button';
import Title from './Title';
import Results from './Results';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [cobj, setCobj] = useState({next: null,total: '0', operation: null});

  const calc = (n) => {
    let target = n.target.innerHTML;
    setCobj(prevCobj => calculate(prevCobj, target))
  }

  let result = '0';
  cobj.next !== null ? result = cobj.next : result = cobj.total;

  return (
    <>
        <Title value="Let's do some math!" />
        <div className="container">
          <Results value={result} />
          <Button type="but digit" value='AC' onclick={calc} />
          <Button type="but digit" value="+/-" onclick={calc} />
          <Button type="but digit" value="%" onclick={calc} />
          <Button type="but operator" value="÷" onclick={calc} />
          <Button type="but digit" value="7" onclick={calc} />
          <Button type="but digit" value="8" onclick={calc} />
          <Button type="but digit" value="9" onclick={calc} />
          <Button type="but operator" value="x" onclick={calc} />
          <Button type="but digit" value="4" onclick={calc} />
          <Button type="but digit" value="5" onclick={calc} />
          <Button type="but digit" value="6" onclick={calc} />
          <Button type="but operator" value="-" onclick={calc} />
          <Button type="but digit" value="1" onclick={calc} />
          <Button type="but digit" value="2" onclick={calc} />
          <Button type="but digit" value="3" onclick={calc} />
          <Button type="but operator" value="+" onclick={calc} />
          <Button type="but digit double" value="0" onclick={calc} />
          <Button type="but digit" value="." onclick={calc} />
          <Button type="but operator" value="=" onclick={calc} />
        </div>
      </>
  )
}

export default Calculator

