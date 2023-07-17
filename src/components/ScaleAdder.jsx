import ReactModal from "react-modal";
import {useState} from 'react'
import '../styles/scaleadder.scss'

export default function ScaleAdder(props) {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(!isOpen);
	}
	const clickHandler = () => {
		const ip = document.getElementById('ip')
		const port = document.getElementById('port')

		if(ip.value !== '' && port.value!== '') {
			props.loading(true)
		}

		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				ip: ip.value,
				port: port.value
			})
		}

		fetch('http://127.0.0.1:2000/', requestOptions)
			.then(response => console.log(response))

		ip.value = "";
		port.value = "";

		handleOpenModal();

		if(props.count === 0) {
			setTimeout(() => {
				window.location.reload();
			}, 300)
		}
		else {
			setTimeout(() => {
				props.setRender(1)
			}, 500)
		}
	}

	return (
		<>
			<button onClick={() => {handleOpenModal()}}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					 className="bi bi-plus-circle" viewBox="0 0 16 16">
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
					<path
						d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
				</svg>
			</button>
			<ReactModal
				ariaHideApp={false}
				isOpen={isOpen}
				className='modal'
			>
				<div className='adder modal-content'>
					<div className='grid' >
						<p>Ip: </p>
						<input type='text' id='ip' placeholder='0.0.0.0' autoComplete='off'/>
						<p>Port: </p>
						<input type='text' id='port' placeholder='8080' autoComplete='off'/>
					</div>
					<button onClick={() => {clickHandler()}}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							 className="bi bi-check-circle" viewBox="0 0 16 16">
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
							<path
								d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
						</svg>
					</button>
					<button onClick={() => {handleOpenModal()}}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							 className="bi bi-x-circle" viewBox="0 0 16 16">
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
							<path
								d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
						</svg>
					</button>
				</div>
			</ReactModal>
		</>
	)
}