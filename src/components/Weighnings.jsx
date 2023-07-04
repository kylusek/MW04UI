import { useState, useEffect } from "react";

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
		<>
			<p>{Object.values(posts.Weighnings.one.name)} {Object.values(posts.Weighnings.one.weight)} {Object.values(posts.Weighnings.one.unit)}</p>
			<p>{Object.values(posts.Weighnings.two.name)} {Object.values(posts.Weighnings.two.weight)} {Object.values(posts.Weighnings.two.unit)}</p>
			<p>{Object.values(posts.Weighnings.three.name)} {Object.values(posts.Weighnings.three.weight)} {Object.values(posts.Weighnings.three.unit)}</p>
			<p>{Object.values(posts.Weighnings.four.name)} {Object.values(posts.Weighnings.four.weight)} {Object.values(posts.Weighnings.four.unit)}</p>
		</>
	)
}