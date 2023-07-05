import '../styles/input.scss'

export default function Input(props) {
	function clickHandler() {
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