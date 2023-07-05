import '../styles/input.scss'
import { useState } from "react";

export default function Input(props) {
	function clickHandler() {
		let min = document.getElementById("min").value
		let max = document.getElementById("max").value
		props.setIsOpen(false)
	}
	function closeClickHandler() {
		props.setIsOpen(false)
	}

	return (
		<div className='input'>
			<h4>Minimum weight</h4>
			<input type='text' id='min' placeholder='Minimum' />
			<h4>Maximum weight</h4>
			<input type='text' id='max' placeholder='Maximum' /> <br></br>
			<button onClick={clickHandler}>Submit</button>
		</div>
	)
}