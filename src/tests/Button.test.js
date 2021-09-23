import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

it('Button renders correctly', () => {
  const test = () => null;
  const tree = renderer
    .create(<Button value="test" type="test" onclick={test} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
