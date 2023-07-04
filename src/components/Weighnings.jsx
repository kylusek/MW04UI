import { useState, useEffect } from "react";
import '../styles/main.scss'
import '../styles/weighnings.scss'

export default function Weighnings() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:1000/db")
			.then(res => res.json())
			.then((data) => {
				setPosts(data);
				console.log(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	})
	return (
		<div className='scales'>
			<p><h2>{Object.values(posts.Weighnings.one.name)}</h2> {Object.values(posts.Weighnings.one.weight)} {Object.values(posts.Weighnings.one.unit)}</p>
			<p><h2>{Object.values(posts.Weighnings.two.name)}</h2> {Object.values(posts.Weighnings.two.weight)} {Object.values(posts.Weighnings.two.unit)}</p>
			<p><h2>{Object.values(posts.Weighnings.three.name)}</h2> {Object.values(posts.Weighnings.three.weight)} {Object.values(posts.Weighnings.three.unit)}</p>
			<p><h2>{Object.values(posts.Weighnings.four.name)}</h2> {Object.values(posts.Weighnings.four.weight)} {Object.values(posts.Weighnings.four.unit)}</p>
		</div>
	)
}