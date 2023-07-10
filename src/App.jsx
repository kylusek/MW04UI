import Header from "./components/Header"
import Navbar from "./components/Navbar";
import Weighnings from "./components/Weighnings";
import { useState } from "react";
import './styles/main.scss'
import './styles/responsive.scss'

export default function App() {
	const [isEmpty, setIsEmpty] = useState(true);

	return (
		<>
			<Header />
			<Navbar isEmpty={isEmpty}/>
			<Weighnings isEmpty={setIsEmpty}/>
		</>
	)
}