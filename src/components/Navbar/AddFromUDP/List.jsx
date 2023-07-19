import '../../../styles/navbar-styles/list.sass';
import ListOption from "./ListOption";

export default function List(props) {
	const list = props.data

	return (
		<div className='select'>
			{list.map((item, index) => {
				return (
					<ListOption key={index} index={index} data={item} setIndex={props.setIndex}/>
				)
			})}
		</div>
	)
}