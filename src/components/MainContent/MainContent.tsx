import { HStack } from "@chakra-ui/react";
import React from "react";
import AutomationDetails from "../Dashboard/AutomationDetails";
import AutomationMode from "../Dashboard/AutomationMode";
import FolderSelect from "../Dashboard/FolderSelect";

const MainContent = () => {
	return (
		<div>
			<FolderSelect />
			<HStack width={"100%"}>
				<AutomationMode />
				<AutomationDetails />
			</HStack>
		</div>
	);
};

export default MainContent;
