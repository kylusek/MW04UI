import '../styles/platform.scss'
import {useEffect, useState} from "react";
import Settings from "./Settings";
import stability from "../assets/Stability.svg";
import zero from "../assets/Zeroing.svg";

export default function Platform(props) {
	const prop = props.platform

	const [backColor, setColor] = useState('#00b300')
	const [borderColor, setBorderColor] = useState('green')
	const [min, setMin] = useState(-1500)
	const [max, setMax] = useState(1500)
	const [stabDis, setStabDis] = useState('visible')
	const [zeroDis, setZeroDis] = useState('visible')

	useEffect(() => {
		if(!(`MIN_STATE_${props.sCount}${props.count}` in localStorage)) {
			window.localStorage.setItem(`MIN_STATE_${props.sCount}${props.count}`, JSON.stringify(-1500))
		}
		if(!(`MAX_STATE_${props.sCount}${props.count}` in localStorage)) {
			window.localStorage.setItem(`MAX_STATE_${props.sCount}${props.count}`, JSON.stringify(1500))
		}
	}, [])

	useEffect(() => {
		setMin(JSON.parse(window.localStorage.getItem(`MIN_STATE_${props.sCount}${props.count}`)))
		setMax(JSON.parse(window.localStorage.getItem(`MAX_STATE_${props.sCount}${props.count}`)))
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
		if (prop.isStab !== '?') {
			setStabDis('visible')
		}
		else {
            setStabDis('hidden')
        }
		if(parseFloat(prop.weight) === 0) {
			setZeroDis('visible')
		}
		else {
            setZeroDis('hidden')
        }
	})

	return (
		<div className='platform'>
			<h3>Platform {props.count}</h3>
			<p style={{
				'backgroundColor': `${backColor}`,
				'border':`0.35em solid ${borderColor}`
			}} className='pWeight'>{prop.weight} {prop.unit}</p>
			<div className='platMenu'>
				<div className='icons'>
					<img src={stability} id='stab' alt='stab' style={{
						visibility: `${stabDis}`,
					}}/>
					<img src={zero} id='zero' alt='zero' style={{
                        visibility: `${zeroDis}`,
                    }}/>

				</div>
				<div className="buttons">
					<Settings
						count={props.count}
						sCount={props.sCount}
						unit={prop.unit}
					/>
				</div>
			</div>
		</div>
	)
}