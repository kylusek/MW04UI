import Navbar from "./components/Navbar";
import Weighnings from "./components/Weighnings";
import {useEffect, useState} from "react";
import './styles/main.scss'
import './styles/responsive.scss'

export default function App() {
	const [isEmpty, setIsEmpty] = useState(true);
	const [wRender, setWRender] = useState(0);
	const [count, setCount] = useState(0);

	// useEffect(() => {
	// 	if('CONNECTIONS' in window.localStorage) {
	// 		const storageData = JSON.parse(window.localStorage.getItem('CONNECTIONS'))
	// 		for(const element of storageData) {
	// 			const reqOpt = {
	// 				method: 'POST',
	// 				headers: {
	// 					'Content-Type': 'application/json'
	// 				},
	// 				body: JSON.stringify({
	// 					ip: element.ip,
	// 					port: element.port
	// 				})
	// 			}
	// 			fetch(`http://localhost:2000/`, reqOpt)
	// 				.then(res => res)
	// 		}
	// 	}
	// 	setTimeout(() => {
	// 		setWRender(1);
	// 	}, 500)
	// }, [])

	return (
		<>
			<Navbar isEmpty={isEmpty} setRender={setWRender} count={count}/>
			<Weighnings isEmpty={setIsEmpty} render={wRender} setRender={setWRender} setCount={setCount}/>
		</>
	)
}