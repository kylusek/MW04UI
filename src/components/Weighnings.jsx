import { useState, useEffect } from "react";
import '../styles/main.scss'
import '../styles/weighnings.scss'
import Scale from '../components/Scale'

export default function Weighnings(props) {
	const [posts, setPosts] = useState([]);
	const [render, setRender] = useState(false);
	const [scaleDelete, setDelete] = useState(false);
	const [secRender, setSecRender] = useState(0);

	useEffect(() => {
		props.setRender(0)
	}, [props.render, secRender])
	useEffect(() => {
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
			})
    })

	const renderScales = () => {
		return (
			posts.Scales?.map((post, i) => {
				return (
					<>
					{scaleDelete ? null : <Scale
											key={post.id}
											post={post}
											count={i+1}
											delete={setDelete}
											sCount={posts.Scales.length}
											setRender={setSecRender}
										  />
					}
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
