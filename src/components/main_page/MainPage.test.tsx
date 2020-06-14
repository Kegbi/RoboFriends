import React from "react";
import MainPage from "./MainPage";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

let tree;
let wrapper;
let wrapper2;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: "",
		isPending: false,
	};
	tree = renderer.create(<MainPage {...mockProps} />).toJSON();
	wrapper = shallow(<MainPage {...mockProps} />);
});

it("Expect to render MainPage component", () => {
	expect(tree).toMatchSnapshot();
});

it("Filters robots correctly", () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: 3,
				name: "John",
				email: "john@gmail.com",
			},
		],
		searchField: "john",
		isPending: false,
	};
	wrapper2 = shallow(<MainPage {...mockProps2} />);
	expect(wrapper.instance().filterRobots()).toEqual([]);
	expect(wrapper2.instance().filterRobots()).toEqual([
		{
			id: 3,
			name: "John",
			email: "john@gmail.com",
		},
	]);
});
