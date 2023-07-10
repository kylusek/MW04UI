import '../styles/scale.scss'
import Platform from "./Platform";

export default function Scale(props) {
	const post = props.post
	const count = props.count

	const closeConn = () => {
		const request = {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ip: post.ip,
				port: post.port
            })
		}
		fetch('http://localhost:2000/update', request)
			.then(response => response.json())

		setTimeout(() => {
			window.location.reload()
		}, 50)
	}

	return (
		<div className='scale'>
			<h2>Scale {count}</h2>
			{post.Weighnings?.map((platform,i) => {
				return (
					<>
						<Platform key={i} platform={platform} count={i+1}/>
					</>
				)
			})}
			<p>Ip: {post.ip}:{post.port}</p>
			<button onClick={closeConn}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					 className="bi bi-dash-circle" viewBox="0 0 16 16">
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
					<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
				</svg>
			</button>
		</div>
	)
}