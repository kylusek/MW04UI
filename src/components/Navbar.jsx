import '../styles/navbar.scss'
import AddScaleList from "./AddScaleList";

export default function Navbar(props) {
	const clickHandler = () => {
		const ip = document.getElementById('ip')
		const port = document.getElementById('port')

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
			.then(response => response.json())

		ip.value = "";
		port.value = "";

		setTimeout(() => {
			props.setRender(1)
		}, 200)
	}

	return (
		<div className='ownNavbar'>
			<p>Ip: </p>
			<input type='text' id='ip' placeholder='0.0.0.0'/>
			<p>Port: </p>
			<input type='text' id='port' placeholder='8080'/>
			<button onClick={() => {clickHandler()}}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					 className="bi bi-plus-circle" viewBox="0 0 16 16">
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
					<path
						d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
				</svg>
			</button>
			<AddScaleList setRender={props.setRender}/>
		</div>
	)
}