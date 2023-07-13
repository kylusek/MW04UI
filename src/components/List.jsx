import '../styles/list.scss';
import ListOption from "./ListOption";
import { useState, useEffect } from "react";

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