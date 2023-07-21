import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button', () => {
  test('should render the Button component', () => {
    const handleClick = jest.fn();
    const component = renderer.create(<Button text="5" handleClick={handleClick} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree = component.root;
    expect(tree.findByType(Button).props.text).toBe('5');
  });
});
