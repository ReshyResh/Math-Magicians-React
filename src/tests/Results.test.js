import React from 'react';
import renderer from 'react-test-renderer';
import Results from '../components/Results';

it('Results renders correctly', () => {
  const tree = renderer
    .create(<Results />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
