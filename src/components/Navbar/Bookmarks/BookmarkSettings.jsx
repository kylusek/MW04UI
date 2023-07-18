import ReactModal from 'react-modal';
import { useState } from 'react';

export default function BookmarkSettings(props) {
	const [isModalOpen, setOpen] = useState(false);

	const submitHandler = () => {
		const name = document.getElementById('name');
		const ip = document.getElementById('ip');
		const port = document.getElementById('port');
		let storage = JSON.parse(window.localStorage.getItem('BOOKMARKS'));

		for(let item in storage) {
			if(storage[item].ip === props.ip && storage[item].port === props.port) {
				if(name.value !== '') {
					storage[item].name = name.value;
					name.value = '';
				}
				if(ip.value !== '') {
					storage[item].ip = ip.value;
					ip.value = '';
				}
				if(port.value !== '') {
					storage[item].port = port.value;
					port.value = '';
				}
			}
		}
		window.localStorage.setItem('BOOKMARKS', JSON.stringify(storage));
		setOpen(false);
	}

	return (
		<>
			<button onClick={() => {setOpen(true)}}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					 className="bi bi-gear" viewBox="0 0 16 16">
					<path
						d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
					<path
						d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
				</svg>
			</button>
			<ReactModal
				ariaHideApp={false}
				isOpen={isModalOpen}
				className='bookmark-settings'
			>
				<div className='modal-content'>
					<h2>Settings</h2>
					<h4>Name</h4>
					<input id='name' type='text' placeholder='Your name'/>
					<h4>Ip</h4>
					<input id='ip' type='text' placeholder='0.0.0.0'/>
					<h4>Port</h4>
					<input id='port' type='text' placeholder='8080'/> <br/>
					<button onClick={submitHandler}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							 className="bi bi-check-circle" viewBox="0 0 16 16">
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
							<path
								d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
						</svg>
					</button>
					<button onClick={() => {setOpen(false)}}>
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