import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Calculator', () => {
  test('should render the component', () => {
    const component = renderer.create(<Calculator />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
