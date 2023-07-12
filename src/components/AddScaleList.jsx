import {useEffect, useState} from "react";
import ReactModal from "react-modal";
import List from "./List";
import '../styles/addscalelist.scss'

export default function AddScaleList() {
	const [isOpen, setIsOpen] = useState(false);
	const [list, setList] = useState([]);
	const [index, setIndex] = useState();

	const refreshHandler = () => {
		const reqOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
		}
		fetch('http://localhost:2001/', reqOptions)
			.then(response => response.json())
	}

	const openHandler = () => {
		setIsOpen(true);
		const reqOptions = {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
		}
		fetch('http://localhost:2001/', reqOptions)
			.then(response => response.json())
	}

	const submitHandler = () => {
		setIsOpen(false)
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				ip: list[index].ip,
				port: list[index].port
			})
		}

		fetch('http://127.0.0.1:2000/', requestOptions)
			.then(response => response.json())

		setTimeout(() => {
			window.location.reload()
		}, 75)
	}

	useEffect(() => {
		fetch('http://localhost:2001/data')
			.then(response => response.json())
			.then((data) => {
				setList(data.list);
			})
	})

	return (
		<>
			<button onClick={openHandler}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					 className="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
					<path
						d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
				</svg>
			</button>
			<ReactModal
				ariaHideApp={false}
				isOpen={isOpen}
			>
				{list.length>0 ? <List data={list} setIndex={setIndex}/> : null}
				<button onClick={submitHandler} className='modal-button'>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						 className="bi bi-check-circle" viewBox="0 0 16 16">
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
						<path
							d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
					</svg>
				</button>
				<button onClick={refreshHandler} className='modal-button'>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						 className="bi bi-arrow-repeat" viewBox="0 0 16 16">
						<path
							d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
						<path
							  d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
					</svg>
				</button>
				<button onClick={() => {setIsOpen(false)}} className='modal-button'>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						 className="bi bi-x-circle" viewBox="0 0 16 16">
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
						<path
							d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
					</svg>
				</button>
			</ReactModal>
		</>
	)
}