import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";

function App() {
	return (
		<>
			<Sidebar children={<MainContent />} />
		</>
	);
}

export default App;
