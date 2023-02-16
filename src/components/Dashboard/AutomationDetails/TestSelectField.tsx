import {
	Box,
	Checkbox,
	Divider,
	Heading,
	HStack,
	VStack,
} from "@chakra-ui/react";
import React from "react";

const TestSelectField = () => {
	const SAMPLE = [
		{ name: "test1", state: true },
		{ name: "test2", state: false },
		{ name: "test3", state: false },
		{ name: "test4", state: false },
	];
	interface TestList {
		name: string;
		state: boolean;
	}
	const [tests, setTests] = React.useState<TestList[]>([]);
	const [all, setAll] = React.useState<boolean>(false);
	interface props {
		e: React.ChangeEvent<HTMLInputElement>;
		i: number;
	}
	const handleChange = ({ e, i }: props) => {
		let tmp = tests.map((ele, index) => {
			if (index === i) {
				ele.state = e.target.checked;
			}
			return ele;
		});
		setTests(tmp);
	};
	const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
		let tmp = tests.map((ele, index) => {
			ele.state = e.target.checked;
			return ele;
		});
		setTests(tmp);
		setAll(!all);
	};
	React.useEffect(() => {
		setTests(SAMPLE);
	}, []);
	return (
		<>
			<Checkbox isChecked={all} onChange={toggleAll}>
				Select/Deselect
			</Checkbox>
			<Box height={300} bg="blackAlpha.300">
				<Heading size="sm">Test Suites</Heading>
				<Divider />
				<VStack align={"flex-start"}>
					{tests.map((ele, i) => {
						return (
							<Checkbox
								key={i}
								isChecked={ele.state}
								onChange={(e) => handleChange({ e, i })}
							>
								{ele.name}
							</Checkbox>
						);
					})}
				</VStack>
			</Box>
		</>
	);
};

export default TestSelectField;
