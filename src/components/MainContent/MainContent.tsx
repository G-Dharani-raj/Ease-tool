import { Flex, HStack } from "@chakra-ui/react";
import React from "react";
import AutomationDetails from "../Dashboard/AutomationDetails";
import AutomationMode from "../Dashboard/AutomationMode";
import FolderSelect from "../Dashboard/FolderSelect";

const MainContent = () => {
	return (
		<div>
			<FolderSelect />
			<Flex width={"100%"} direction={{ base: "column", lg: "row" }}>
				<AutomationMode />
				<AutomationDetails />
			</Flex>
		</div>
	);
};

export default MainContent;
