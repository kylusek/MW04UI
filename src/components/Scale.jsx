import '../styles/scale.scss';
import Platform from "./Platform";
import { useEffect, useState } from 'react';

export default function Scale(props) {
	const [bookmarked, setBookmarked] = useState(false);

	const post = props.post
	const count = props.count
	const sCount = props.sCount
	let key = 1;

	const isIn = (arr) => {
		for(const element of arr) {
			if (element.ip === post.ip && element.port === post.port) {
				return true
			}
		}
		return false
	}

	const getIndex = (arr) => {
		for(let i=0; i<arr.length; i++) {
			if(arr[i].ip === post.ip && arr[i].port === post.port) {
				return i;
			}
		}
	}

	const closeConn = () => {
		let tempArr = JSON.parse(window.localStorage.getItem('CONNECTIONS'))
		if(tempArr.length > 1) {
			const index = getIndex(tempArr)
			for(let i=index; i<tempArr.length-1; i++) {
				tempArr[i] = tempArr[i+1]
			}
			tempArr.pop()
			window.localStorage.setItem('CONNECTIONS', JSON.stringify(tempArr))
		}
		else {
			window.localStorage.removeItem('CONNECTIONS')
		}

		for(let i = count; i<sCount; i++) {
			window.localStorage.setItem(`MIN_STATE_${count}1`, window.localStorage.getItem(`MIN_STATE_${count+1}1`))
			window.localStorage.setItem(`MIN_STATE_${count}2`, window.localStorage.getItem(`MIN_STATE_${count+1}2`))
			window.localStorage.setItem(`MIN_STATE_${count}3`, window.localStorage.getItem(`MIN_STATE_${count+1}3`))
			window.localStorage.setItem(`MIN_STATE_${count}4`, window.localStorage.getItem(`MIN_STATE_${count+1}4`))
			window.localStorage.setItem(`MAX_STATE_${count}1`, window.localStorage.getItem(`MAX_STATE_${count+1}1`))
			window.localStorage.setItem(`MAX_STATE_${count}2`, window.localStorage.getItem(`MAX_STATE_${count+1}2`))
			window.localStorage.setItem(`MAX_STATE_${count}3`, window.localStorage.getItem(`MAX_STATE_${count+1}3`))
			window.localStorage.setItem(`MAX_STATE_${count}4`, window.localStorage.getItem(`MAX_STATE_${count+1}4`))
		}
		window.localStorage.removeItem(`MAX_STATE_${sCount}1`)
		window.localStorage.removeItem(`MIN_STATE_${sCount}1`)
		window.localStorage.removeItem(`MAX_STATE_${sCount}2`)
		window.localStorage.removeItem(`MIN_STATE_${sCount}2`)
		window.localStorage.removeItem(`MAX_STATE_${sCount}3`)
		window.localStorage.removeItem(`MIN_STATE_${sCount}3`)
		window.localStorage.removeItem(`MAX_STATE_${sCount}4`)
		window.localStorage.removeItem(`MIN_STATE_${sCount}4`)

		if(sCount === 1) {
			props.delete(true)
		}

		const request = {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ip: post.ip,
				port: post.port
            })
		}
		fetch('http://localhost:2000/update', request)
			.then(response => response)

		props.setRender(1)
	}

	const notAdded = () => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
				 className="bi bi-bookmark-plus" viewBox="0 0 16 16">
				<path
					d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
				<path
					d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
			</svg>
		)
	}

	const added = () => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
				 className="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
				<path
					  d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
			</svg>
		)
	}

	const bookmarkHandler = () => {
		if('BOOKMARKS' in window.localStorage) {
			if(!bookmarked) {
				let localStorage = JSON.parse(window.localStorage.getItem('BOOKMARKS'));
				localStorage.push({
					ip: post.ip,
					port: post.port
				});
				window.localStorage.setItem('BOOKMARKS', JSON.stringify(localStorage));
				setBookmarked(true);
			}
		}
		else {
			window.localStorage.setItem('BOOKMARKS', JSON.stringify([
				{ip: post.ip, port: post.port}
			]))
			setBookmarked(true);
		}
	}

	useEffect(() => {
		props.setLoading(false)
		window.localStorage.removeItem('LOADING', '')
		if(!('CONNECTIONS' in window.localStorage)) {
			window.localStorage.setItem('CONNECTIONS',JSON.stringify([{ip: post.ip, port: post.port}]))
		}
		else {
			let tempArr = JSON.parse(window.localStorage.getItem('CONNECTIONS'))
			if(!isIn(tempArr)) {
				tempArr.push({ip: post.ip, port: post.port})
				window.localStorage.setItem('CONNECTIONS', JSON.stringify(tempArr))
			}
		}
		if('BOOKMARKS' in window.localStorage) {
			const storageData = JSON.parse(window.localStorage.getItem('BOOKMARKS'))
			for(let item of storageData) {
				if(item.ip === post.ip && item.port === post.port) {
					setBookmarked(true);
				}
			}
		}
	}, [])

	return (
		<div className='scale'>
			{post.Weighnings?.map((platform,i) => {
				key++
				return (
					<>
						<Platform key={key} platform={platform} count={i+1} sCount={count}/>
					</>
				)
			})}
			<div className='hGrid'>
				<div id='header'>
					<h3>{post.ip}:{post.port}</h3>
				</div>
				<button className='bookmark-btn' onClick={bookmarkHandler}>
					{bookmarked ? added() : notAdded()}
				</button>
				<button onClick={closeConn}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						 className="bi bi-dash-circle" viewBox="0 0 16 16">
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
						<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
					</svg>
				</button>
			</div>
		</div>
	)
}