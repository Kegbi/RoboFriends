import React from "react";
import CardList from "./CardList";
import renderer from 'react-test-renderer';

it('Expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'johnsnow',
      email: 'john@gmail.com'
    }
  ]
  const tree = renderer.create(<CardList robots={mockRobots}/>).toJSON()
  expect(tree).toMatchSnapshot();
})