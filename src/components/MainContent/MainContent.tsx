import React from "react";
import AutomationDetails from "../Dashboard/AutomationDetails";
import AutomationMode from "../Dashboard/AutomationMode";
import FolderSelect from "../Dashboard/FolderSelect";

const MainContent = () => {
	return (
		<div>
			<FolderSelect />
			<AutomationMode />
			<AutomationDetails />
		</div>
	);
};

export default MainContent;
