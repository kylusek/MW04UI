import '../../styles/navbar-styles/navbar.scss'
import AddScaleList from "./AddFromUDP/AddScaleList";
import ScaleAdder from './ScaleAdder'
import Bookmarks from './Bookmarks/Bookmarks'

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
				<Bookmarks setRender={props.setRender} count={props.count}/>
			</div>
		</div>
	)
}