import { useState, useEffect } from "react";
import '../styles/main.scss'
import '../styles/weighnings.scss'
import Scale from '../components/Scale'

export default function Weighnings(props) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:1000/db")
			.then(res => res.json())
			.then((data) => {
				setPosts(data);
				console.log(data.Scales[0].Weighnings[0].weight, data.Scales[0].Weighnings[1].weight);
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
					<Scale post={post} count={i+1}/>
				)
			})}
		</div>
	)
}