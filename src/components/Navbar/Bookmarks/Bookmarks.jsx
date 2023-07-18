import ReactModal from 'react-modal';
import BookmarkItem from './BookmarkItem'
import { useState, useEffect } from 'react';
import '../../../styles/navbar-styles/bookmarks.scss'

export default function Bookmarks(props) {
	const [isModalOpen, setIsOpen] = useState(false);
	let localStorage = JSON.parse(window.localStorage.getItem('BOOKMARKS'));
	const [isEmpty, setIsEmpty] = useState(true);
	let i = 0;

	const itemRender = () => {
		return (
			<>
				{localStorage?.map(item => {
					i++;
					return (
						<BookmarkItem key={i} item={item} setRender={props.setRender} count={props.count}/>
					)
				})}
			</>
		)
	}

	useEffect(() => {
		if('BOOKMARKS' in window.localStorage) {
			localStorage = JSON.parse(window.localStorage.getItem('BOOKMARKS'));
			setIsEmpty(false);
		}
		else {
			localStorage = [];
		}
	});

	return (
		<>
			<button onClick={() => {setIsOpen(true)}}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					 className="bi bi-bookmarks-fill" viewBox="0 0 16 16">
					<path
						d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"/>
					<path
						d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z"/>
				</svg>
			</button>
			<ReactModal
				ariaHideApp={false}
				isOpen={isModalOpen}
			>
				<div className='bookmark-list' >
					{isEmpty ? null : itemRender()}
				</div>
				<button onClick={() => {setIsOpen(false)}}>
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