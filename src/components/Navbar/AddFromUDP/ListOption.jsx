import { useState } from 'react'

export default function ListOption(props) {
	const index = props.index
	const name = props.data.name
	const ip = props.data.ip
	const port = props.data.port
	const serial = props.data.serial

	const [bgColor, setBgColor] = useState('#f2f2f2')
	const [onLeave, setOnLeave] = useState('#f2f2f2')

	const clickHandler = () => {
		props.setIndex(index)
		setOnLeave('#bfbfbf')
	}

	return (
		<div
			className='option'
			onClick={clickHandler}
			style={{
				backgroundColor: `${bgColor}`
			}}
			onMouseEnter={() => {setBgColor('#d9d9d9')}}
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