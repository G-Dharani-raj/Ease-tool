import { Flex, HStack } from "@chakra-ui/react";
import React from "react";
import TestSelectField from "./AutomationDetails/TestSelectField";

const AutomationDetails = () => {
	return (
		<>
			<Flex
				width={{ base: "100%", lg: "50%" }}
				direction={{ base: "column", lg: "row" }}
				gap={5}
			>
				<TestSelectField />
				<TestSelectField />
			</Flex>
		</>
	);
};

export default AutomationDetails;
