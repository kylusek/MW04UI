import '../styles/platform.scss'
import {useEffect, useState} from "react";
import Settings from "./Settings";

export default function Platform(props) {
	const prop = props.platform

	const [backColor, setColor] = useState('#00b300')
	const [borderColor, setBorderColor] = useState('green')
	const [min, setMin] = useState(-1500)
	const [max, setMax] = useState(1500)

	useEffect(() => {
		if (prop.weight > max) {
			setColor('#ff4d4d')
			setBorderColor('#ff0000')
		}
		else if (prop.weight < min) {
			setColor('#ffff66')
			setBorderColor('#ffff00')
		}
		else if (prop.weight <= max && prop.weight >= min) {
			setColor('#00b300')
			setBorderColor('green')
		}
	})

	return (
		<div className='platform'>
			<h3>Platform {props.count}</h3>
			<p style={{
				'backgroundColor': `${backColor}`,
				'border':`0.35em solid ${borderColor}`
			}} className='pWeight'>{prop.weight} {prop.unit}</p>
			<Settings setMin={setMin}
					  setMax={setMax}
					  unit={prop.unit}
					  actMin={min}
					  actMax={max}
			/>
		</div>
	)
}