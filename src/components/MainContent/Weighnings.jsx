import { useState, useEffect } from "react";
import '../../styles/main.sass'
import '../../styles/weighnings.sass'
import Scale from './Scale'
import Loading from './Loading'

export default function Weighnings(props) {
	const [posts, setPosts] = useState(null);
	const [render, setRender] = useState(false);
	const [scaleDelete, setDelete] = useState(false);
	const [secRender, setSecRender] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		props.setRender(0)
	}, [props.render])

	useEffect(() => {
		setSecRender(0)
	}, [secRender])

	useEffect(() => {
		if('LOADING' in window.localStorage) {
			setLoading(true);
		}
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
		if(posts !== null) {
			for(let i=0; i<posts.Scales.length; i++) {
				if(posts.Scales[i] === undefined) {
					for(let j=i; j<posts.Scales.length; j++) {
						posts.Scales[j] = posts.Scales[j+1];
					}
					posts.Scales.pop();
				}
			}
		}
    })

	const renderScales = () =>
		(
			posts.Scales?.map((post, i) =>{
				try {
					return (
						<>
							{scaleDelete ? null : <Scale
								key={post.id}
								post={post}
								count={i + 1}
								delete={setDelete}
								sCount={posts.Scales.length}
								setRender={setSecRender}
								setLoading={setLoading}
							/>
							}
						</>
					)
				}
				catch(err) {
					console.log(err)
				}
			})
		)

	return (
		<div className='scales'>
			{render ? renderScales() : null}
			{loading ? <Loading loading={setLoading}/> : null}
		</div>
	)
}
