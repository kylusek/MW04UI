import BookmarkSettings from './BookmarkSettings';
import { useState } from 'react';

export default function BookmarkItem(props) {
	const [bookmarkName, setName] = useState(props.item.name);

	const removeBookmark = () => {
		let storage = JSON.parse(window.localStorage.getItem('BOOKMARKS'))
		if(storage.length === 1) {
			window.localStorage.removeItem('BOOKMARKS');
		}
		else {
			for(let items in storage) {
				if(props.item.ip === storage[items].ip && props.item.port === storage[items].port) {
					for(let i=parseInt(items); i<storage.length-1; i++) {
						storage[i] = storage[i+1];
					}
				}
			}
			storage.pop();
			window.localStorage.setItem('BOOKMARKS', JSON.stringify(storage));
		}
	}

	const bookmarkConnect = () => {
		const request = {
			method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({
				ip: props.item.ip,
				port: props.item.port
			})
		};
		console.log(request);
		fetch('http://127.0.0.1:2000/', request)
			.then(() => {console.log('ee')})
			.then(response => response)

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
		<div className='option bookmark-option'>
			<div>
				<h4>{bookmarkName}</h4>
				<p>{props.item.ip}:{props.item.port}</p>
			</div>
			<div>
				<button onClick={bookmarkConnect}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						 className="bi bi-plug" viewBox="0 0 16 16">
						<path
							d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0zM5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4H5z"/>
					</svg>
				</button>
				<button onClick={removeBookmark}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						 className="bi bi-bookmark-dash" viewBox="0 0 16 16">
						<path d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
						<path
							d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
					</svg>
				</button>
				<BookmarkSettings setName={setName} ip={props.item.ip} port={props.item.port}/>
			</div>
		</div>
	)
}