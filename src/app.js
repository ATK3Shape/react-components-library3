import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import './assets/styles/App.scss';

// Components
import Bar3d from "./components/bar3d";
// import {Bar3d} from './components';

const App = ({ name }) => (
	<div className="App">
		<header className="App-header">
			<p>React components project</p>
		</header>
		<div className="container">
			<Bar3d values={[68, 25]} />
		</div>
	</div>
);

ReactDOM.render(<App name="React app" />, document.getElementById("app"));

App.propTypes = {
	name: PropTypes.string.isRequired
};
