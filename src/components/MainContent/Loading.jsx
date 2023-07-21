import '../../styles/snackbar.sass';
import {useState} from "react";
import errImg from '../../assets/connection-error.png';

export default function Loading(props) {
	const [showClass, setShow] = useState('');
	const [display, setDisplay] = useState('inline-block')
	const [isTimeout, setIsTimeout]	= useState(false);

	setTimeout(() => {
		setShow('show')
		setDisplay('none')
		setIsTimeout(true)
		setTimeout(() => {
			setShow('')
			window.localStorage.removeItem('LOADING');
			props.loading(false);
		}, 3000);
	}, 18000)

	const errorImg = () => (
		<div>
			<img src={errImg} alt='error' />
		</div>
	)

	return (
		<div className='scale' id='scale-loading'>
			<div id='snackbar' className={showClass}>Connection error</div>
			<div
				className='ld ld-ring ld-spin'
				style={{
					fontSize: '15.8em',
					display: `${display}`
				}}
			></div>
			{isTimeout ? errorImg() : null}
		</div>
	)
}