import { useState, useEffect } from "react";
import Header from "./components/Header"
import Weighnings from "./components/Weighnings";
import NavBar from "./components/Navbar";
import './styles/main.scss'

export default function App() {
	const [columnCount, setColumnCount] = useState(6);

	return (
		<>
			<Header />
			<NavBar columnCount={setColumnCount}/>
			<Weighnings columnCount={columnCount}/>
		</>
	)
}