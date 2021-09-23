import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../components/spinner';

it('Spinner renders correctly', () => {
  const tree = renderer
    .create(<Spinner />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
