import { useState, useEffect } from "react";
import Header from "./components/Header"
import Weighnings from "./components/Weighnings";
import './styles/main.scss'

export default function App() {
	return (
		<>
			<Header />
			<Weighnings />
		</>
	)
}