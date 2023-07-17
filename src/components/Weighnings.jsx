import { useState, useEffect } from "react";
import '../styles/main.scss'
import '../styles/weighnings.scss'
import Scale from '../components/Scale'
import Loading from '../components/Loading'

export default function Weighnings(props) {
	const [posts, setPosts] = useState([]);
	const [render, setRender] = useState(false);
	const [scaleDelete, setDelete] = useState(false);
	const [secRender, setSecRender] = useState(0);

	useEffect(() => {
		props.setRender(0)
	}, [props.render])

	useEffect(() => {
		setSecRender(0)
	}, [secRender])

	useEffect(() => {
		fetch("http://localhost:2000/")
			.then(res => res.json())
			.then((data) => {
				props.setRender(1)
				if (data.Scales.length === 0) {
					props.isEmpty(true)
					props.setCount(data.Scales.length)
				} else {
					setPosts(data)
					setRender(true)
					props.isEmpty(false)
					props.setCount(data.Scales.length)
				}
			})
    })

	const renderScales = () =>
		(
			posts.Scales?.map((post, i) =>
				(
					<>
						{scaleDelete ? null : <Scale
							key={post.id}
							post={post}
							count={i + 1}
							delete={setDelete}
							sCount={posts.Scales.length}
							setRender={setSecRender}
							setLoading={props.setLoading}
						/>
						}
					</>
				))
		)

	return (
		<div className='scales'>
			{render ? renderScales() : null}
			{props.loading ? <Loading /> : null}
		</div>
	)
}
