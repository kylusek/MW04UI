import { useState, useEffect } from "react";
import '../styles/main.scss'
import '../styles/weighnings.scss'
import Scale from '../components/Scale'

export default function Weighnings(props) {
	const [posts, setPosts] = useState([]);
	const arr = [1, 2, 3, 4, 5, 6]

	useEffect(() => {
		fetch("http://localhost:1000/db")
			.then(res => res.json())
			.then((data) => {
				const shifted = data.Scales.shift();
				setPosts(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	})
	return (
		<div className='scales' style={{
			gridTemplateColumns: `repeat(${props.columnCount}, 1fr)`
		}}>
			{posts.Scales?.map((post, i) => {
				return (
					<Scale key={post.id} post={post} count={i+1}/>
				)
			})}
		</div>
	)
}