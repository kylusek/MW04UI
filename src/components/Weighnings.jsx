import { useState, useEffect } from "react";
import '../styles/main.scss'
import '../styles/weighnings.scss'
import Scale from '../components/Scale'

export default function Weighnings() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:1000/db")
			.then(res => res.json())
			.then((data) => {
				data.Scales.shift()
				setPosts(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	})
	return (
		<div className='scales'>
			{posts.Scales?.map((post, i) => {
				return (
					<Scale key={post.id} post={post} count={i+1}/>
				)
			})}
		</div>
	)
}