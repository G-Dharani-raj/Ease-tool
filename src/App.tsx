import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
	return (
		<>
			<Sidebar children={<h1>something</h1>} />
		</>
	);
}

export default App;
