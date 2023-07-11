import '../styles/list.scss';
import ListOption from "./ListOption";
import { useState } from "react";

export default function List(props) {
	const list = props.data

	const [whichIndex, setIndex] = useState(null)

	if(whichIndex !== null) {
		props.setIndex(whichIndex)
	}

	return (
		<div className='select'>
			{list.map((item, index) => {
				return (
					<ListOption key={index} index={index} data={item} setIndex={setIndex}/>
				)
			})}
		</div>
	)
}