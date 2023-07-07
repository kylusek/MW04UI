import '../styles/input.scss'
import {useEffect, useState} from "react";
export default function Input(props) {
	const [actMin, setActMin] = useState();
	const [actMax, setActMax] = useState();
	const minPlaceholder = actMin + props.unit;
	const maxPlaceholder = actMax + props.unit;

	function clickHandler() {
		const min = parseFloat(document.getElementById('min').value)
		const max = parseFloat(document.getElementById('max').value)
		if (isNaN(min)) {props.setMin(actMin)}
		else {
			props.setMin(min)
		}
		if (isNaN(max)) {props.setMax(actMax)}
		else {
			props.setMax(max)
		}
		props.isSub(true)
		props.setIsOpen(false)
	}

	const changeUnit = () => {
		setActMin(props.actMin/1000)
		setActMax(props.actMax/1000)
	}

	const safeActWeightSet = () => {
		setActMin(props.actMin);
		setActMax(props.actMax);
	}

	function resetHandler() {
		props.setMin(-1500)
		props.setMax(1500)
		props.setIsOpen(false)
		props.isReset(true)
	}


	useEffect(() => {
		safeActWeightSet()
		if(props.unit === 'kg') {
			changeUnit()
		}
	}, [])

	return (
		<div className='input'>
			<h4>Min</h4>
			<input type='text' id='min' placeholder={minPlaceholder} autoComplete='off'/>
			<h4>Max</h4>
			<input type='text' id='max' placeholder={maxPlaceholder} autoComplete='off'/> <br></br>
			<button onClick={clickHandler}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					 className="bi bi-check-circle" viewBox="0 0 16 16">
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
					<path
						d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
				</svg>
			</button>
			<span> </span>
			<button onClick={resetHandler}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					 className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
					<path d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
					<path
						d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
				</svg>
			</button>
			<span> </span>
			<button onClick={props.handleOpenModal}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					 className="bi bi-x-circle" viewBox="0 0 16 16">
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
					<path
						d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
				</svg>
			</button>
		</div>
	)
}