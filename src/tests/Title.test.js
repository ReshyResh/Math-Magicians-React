import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../components/Title';

it('Title renders correctly', () => {
  const tree = renderer
    .create(<Title value="Test" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
