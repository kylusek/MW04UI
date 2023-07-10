import { useState } from "react";
import '../styles/main.scss'
import '../styles/weighnings.scss'
import Scale from '../components/Scale'

export default function Weighnings(props) {
	const [posts, setPosts] = useState([]);
	const [render, setRender] = useState(false);
	const [scaleDelete, setDelete] = useState(false);

	fetch("http://localhost:2000/")
		.then(res => res.json())
		.then((data) => {
			if (data.Scales.length !== 0) {
				setPosts(data)
				setRender(true)
				props.isEmpty(false)
			}
			else {
				props.isEmpty(true)
			}
			//console.log(data.Scales.length);
		})

	const renderScales = () => {
		return (
			posts.Scales?.map((post, i) => {
				return (
					<>
					{scaleDelete ? null : <Scale key={post.id} post={post} count={i+1} delete={setDelete} />}
					</>
				)
			})
		)
	}

	return (
		<div className='scales'>
			{render ? renderScales() : null}
		</div>
	)
}
