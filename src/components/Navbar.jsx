import '../styles/navbar.scss'
import AddScaleList from "./AddScaleList";
import ScaleAdder from './ScaleAdder'

export default function Navbar(props) {

	return (
		<div className='nav-container'>
			<div className='ownNavbar'>
				<ScaleAdder
					setRender={props.setRender}
					count={props.count}
					loading={props.loading}
				/>
				<AddScaleList
					setRender={props.setRender}
					count={props.count}
					loading={props.loading}
				/>
			</div>
		</div>
	)
}