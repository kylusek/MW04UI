import '../styles/platform.scss'
// import {useEffect, useState} from "react";

export default function Platform(props) {
	const prop = props.platform

	// const [backColor, setColor] = useState('#00b300')
	// const [borderColor, setBorderColor] = useState('green')

	// useEffect(() => {
	// 	if (prop.weight > maxWeight) {
	// 		setColor('#ff4d4d')
	// 		setBorderColor('#ff0000')
	// 	}
	// 	else if (prop.weight < minWeight) {
	// 		setColor('#ffff66')
	// 		setBorderColor('#ffff00')
	// 	}
	// 	else if (prop.weight <= maxWeight && prop.weight >= minWeight) {
	// 		setColor('#00b300')
	// 		setBorderColor('green')
	// 	}
	// })

	return (
		<div className='platform'>
			<h3>Platform {props.count}</h3>
			<p style={{
				/*'backgroundColor':`${backColor}`,
				'border':`0.35em solid ${borderColor}`*/
			}} className='pWeight'>{prop.weight} {prop.unit}</p>
		</div>
	)
}