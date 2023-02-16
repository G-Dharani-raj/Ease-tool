import {
	Box,
	Button,
	Heading,
	HStack,
	Radio,
	RadioGroup,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import { RxGlobe } from "react-icons/rx";
import React from "react";

const AutomationMode = () => {
	return (
		<>
			<Box
				lineHeight={"2rem"}
				background="ghostwhite"
				p={7}
				borderRadius="lg"
			>
				<Heading size={"md"}>AUTOMATION MODE</Heading>
				<Text>Choose the Automation Mode :</Text>
				<RadioGroup value="web">
					<VStack align={"flex-start"}>
						<Radio value="web">Web</Radio>
						<Radio value="protractor">Protractor</Radio>
					</VStack>
				</RadioGroup>
			</Box>
			<Box
				lineHeight={"2rem"}
				background="ghostwhite"
				p={7}
				borderRadius="lg"
			>
				<Heading size={"md"}>WEB AUTOMATION</Heading>
				<HStack>
					<RxGlobe /> <Text>Choose the type of browser :</Text>
				</HStack>
				<RadioGroup>
					<SimpleGrid columns={{ base: 1, lg: 3, sm: 1 }}>
						<Radio value="chrome">Chrome</Radio>
						<Radio value="firefox">Firefox</Radio>
						<Radio value="opera">Opera</Radio>
						<Radio value="edge">Edge</Radio>
						<Radio value="ie">Internet Explorer</Radio>
						<Button width={"50%"}>Set Browser</Button>
					</SimpleGrid>
				</RadioGroup>
			</Box>
		</>
	);
};

export default AutomationMode;
