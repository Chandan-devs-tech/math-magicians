import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../Quote';

describe('Quotes', () => {
  test('should render the component', () => {
    const component = renderer.create(<Quotes />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
