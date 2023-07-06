import '../styles/input.scss'
import {useEffect, useState} from "react";
export default function Input(props) {
	const [actMin, setActMin] = useState();
	const [actMax, setActMax] = useState();

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
			<h4>Minimum weight</h4>
			<input type='text' id='min' placeholder='Minimum'/>
			<h4>Maximum weight</h4>
			<input type='text' id='max' placeholder='Maximum'/> <br></br>
			<p className='actMNX'>Actual minimum: {props.actMin} {props.unit}</p>
			<p className='actMNX'>Actual maximum: {props.actMax} {props.unit}</p>
			<button onClick={clickHandler}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					 className="bi bi-check-lg" viewBox="0 0 16 16">
					<path
						d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
				</svg>
			</button>
			<span> </span>
			<button onClick={resetHandler}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					 className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
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