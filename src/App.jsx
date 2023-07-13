import Header from "./components/Header"
import Navbar from "./components/Navbar";
import Weighnings from "./components/Weighnings";
import {useEffect, useState} from "react";
import './styles/main.scss'
import './styles/responsive.scss'

export default function App() {
	const [isEmpty, setIsEmpty] = useState(true);
	const [wRender, setWRender] = useState(0);

	useEffect(() => {
		if('CONNECTIONS' in window.localStorage) {
			const storageData = JSON.parse(window.localStorage.getItem('CONNECTIONS'))
			for(let i=0; i<storageData.length; i++) {
				const reqOpt = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						ip: storageData[i].ip,
						port: storageData[i].port
					})
				}
				fetch(`http://localhost:2000/`, reqOpt)
					.then(res => res.json())
			}
		}
		setTimeout(() => {
			setWRender(1);
		}, 200)
	}, [])

	return (
		<>
			<Header />
			<Navbar isEmpty={isEmpty} setRender={setWRender}/>
			<Weighnings isEmpty={setIsEmpty} render={wRender} setRender={setWRender}/>
		</>
	)
}