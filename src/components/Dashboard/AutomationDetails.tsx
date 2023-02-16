import { HStack } from "@chakra-ui/react";
import React from "react";
import TestSelectField from "./AutomationDetails/TestSelectField";

const AutomationDetails = () => {
	return (
		<>
			<HStack width={"50%"}>
				<TestSelectField />
				<TestSelectField />
			</HStack>
		</>
	);
};

export default AutomationDetails;
