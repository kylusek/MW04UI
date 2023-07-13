import '../styles/platform.scss'
import {useEffect, useState} from "react";
import Settings from "./Settings";
import stability from "../assets/Stability.png";
import zero from "../assets/Zeroing.png";

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
			<div className='pWeight'
				 style={{
					 'backgroundColor': `${backColor}`,
					 'border':`0.35em solid ${borderColor}`
				 }}
				 id='value'
			>
				<p>{prop.weight} {prop.unit}</p>
			</div>
			<div
				className='pWeight'
				style={{
					'backgroundColor': `#00b300`,
					'border':`0.35em solid green`,
					'border-left': '0'
				}}
				id='icons'
			>
				<div className='icons-img'>
					<p className='icons'><img src={zero} id='zero' alt='zero' style={{
						visibility: `${zeroDis}`,
					}}/></p>
				</div>
				<div className='icons-img'>
					<p className='icons'><img src={stability} id='stab' alt='stab' style={{
						visibility: `${stabDis}`,
					}}/></p>
				</div>
			</div>
			<div className="buttons">
				<Settings
					count={props.count}
					sCount={props.sCount}
					unit={prop.unit}
				/>
			</div>
		</div>
	)
}