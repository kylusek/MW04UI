import { useState, useEffect } from "react";
import Header from "./components/Header"
import Weighnings from "./components/Weighnings";
import './styles/main.scss'
import './styles/responsive.scss'

export default function App() {
	const [columnCount, setColumnCount] = useState(6);

	return (
		<>
			<Header />
			<Weighnings columnCount={columnCount}/>
		</>
	)
}