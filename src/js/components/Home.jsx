import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import TimeCounter from "./TimeCounter"

//create your first component
const Home = ({contador}) => {
	return (
		<div className="text-center d-flex justify-content-center align-items-center min-vh-100 bg-body-secondary">
			<TimeCounter counter={contador}/>
		</div>
	);
};

export default Home;