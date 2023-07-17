import '../styles/snackbar.scss';
import {useState} from "react";

export default function Loading(props) {
	const [showClass, setShow] = useState('');
	setTimeout(() => {
		setShow('show')
		setTimeout(() => {
			setShow('')
			props.loading(false);
		}, 3000);
	}, 3000)

	return (
		<div className='scale' id='scale-loading'>
			<div id='snackbar' className={showClass}>Connection error</div>
			<div
				className='ld ld-ring ld-spin'
				style={{
					fontSize: '15.8em'
				}}
			></div>
		</div>
	)
}