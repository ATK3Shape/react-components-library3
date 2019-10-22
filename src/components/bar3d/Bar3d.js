import React from "react";
import PropTypes from "prop-types";
import "./bar3d.scss";

const Bar3d = ({ values }) => (
	<div className="root">
		<div className="chart">
			<div className={`bar bar-left-${values[0]} bar-right-${values[1]}`}>
				<div className="face side-left">
					<div className="growing-bar"></div>
				</div>
				<div className="face side-right">
					<div className="growing-bar"></div>
				</div>
				<div className="face top"></div>
			</div>
		</div>
	</div>
);

Bar3d.propTypes = {
	values: PropTypes.array.isRequired
};

export default Bar3d;
