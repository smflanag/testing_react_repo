import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { create } from "react-test-renderer";
import TestingComponent from "./TestingComponent";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const sum = require("./sum");

test('test that sum(2,1) equals 3', () => {
    expect(sum(2,1)).toBe(3);
});



test("testing component matches the snapshot", () => {
const component = create(<TestingComponent />);
expect(component.toJSON()).toMatchSnapshot();
});
