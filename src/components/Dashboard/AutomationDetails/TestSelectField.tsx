import { Box, Checkbox, HStack, VStack } from "@chakra-ui/react";
import React from "react";

const TestSelectField = () => {
	const SAMPLE = [
		{ name: "test1", state: false },
		{ name: "test2", state: false },
		{ name: "test3", state: false },
		{ name: "test4", state: false },
	];
	return (
		<>
			<Checkbox>Select/Deselect</Checkbox>
			<Box>
				<VStack>
					{SAMPLE.map((e, i) => {
						return <Checkbox>{e.name}</Checkbox>;
					})}
				</VStack>
			</Box>
		</>
	);
};

export default TestSelectField;
