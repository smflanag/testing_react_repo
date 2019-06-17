import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { create } from "react-test-renderer";
import Home from "./home";
import About from "./about";
import ShowList from './showlist';
import ShowDetail from './showdetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const sum = require("./sum");

test('test that sum(2,1) equals 3', () => {
    expect(sum(2,1)).toBe(3);
});


test("Show list component matches snapshot", () => {
const component = create(<ShowList />);
expect(component.toJSON()).toMatchSnapshot();
});

test("Home component matches snapshot", () => {
const component = create(<Home/>);
expect(component.toJSON()).toMatchSnapshot();
});

test("About component matches snapshot", () => {
const component = create(<About />);
expect(component.toJSON()).toMatchSnapshot();
});

//test("Show detail component with ID 1 displays show detail for Under the Dome", () => {
//const component = create(<ShowDetail />, 1);
//var under_the_dome_data = (<div className="ui card">
//    <div className="content">
//        <p className="header"><b>Name: </b>Under the Dome</p>
//        <p><p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p></p>
//    </div>
//</div>)
//console.log(component.toJSON().children.children)
//var under_the_dome_data_json = JSON.parse(under_the_dome_data)
//
//expect(component.toJSON()).toBe(under_the_dome_data_json);
//});


