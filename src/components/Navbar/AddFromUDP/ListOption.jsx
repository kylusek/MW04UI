import { useState, useEffect } from 'react';

export default function ListOption(props) {
	const index = props.index;
	const name = props.data.name;
	const ip = props.data.ip;
	const port = props.data.port;
	const serial = props.data.serial;

	const [bgColor, setBgColor] = useState('#f2f2f2');
	const [onEnter, setOnEnter] = useState('#d9d9d9');
	const [onLeave, setOnLeave] = useState('#f2f2f2');
	const [isClicked, setIsClicked] = useState(false);

	const clickHandler = () => {
		if(isClicked) {
			props.setIndex(null);
			setOnEnter('#d9d9d9');
			setOnLeave('#f2f2f2');
			setBgColor('#f2f2f2');
			setIsClicked(false)
		}
		else {
			props.setIndex(index);
			setOnEnter('#808080');
			setOnLeave('#a6a6a6');
			setBgColor('#808080');
			window.localStorage.setItem('IS_CLICKED', JSON.stringify(index));
			setIsClicked(true);
		}
	}

	useEffect(() => {
		if(JSON.parse(window.localStorage.getItem('IS_CLICKED')) !== index) {
			if(onEnter !== '#d9d9d9' && onLeave !== '#f2f2f2') {
				setOnEnter('#d9d9d9');
				setOnLeave('#f2f2f2');
				setBgColor('#f2f2f2');
			}
		}
	})

	return (
		<div
			className='option'
			onClick={clickHandler}
			style={{
				backgroundColor: `${bgColor}`
			}}
			onMouseEnter={() => {setBgColor(onEnter)}}
			onMouseLeave={() => {setBgColor(onLeave)}}
		>
			<div id='lps' className='data'>
				<p>{index+1}.</p>
			</div>
			<div id='names' className='data'>
				<p>{name}</p>
			</div>
			<div id='serial' className='data'>
				<p>{serial}</p>
			</div>
			<div id='addresses' className='data'>
				<p>{ip}:{port}</p>
			</div>
		</div>
	)
}