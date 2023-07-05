import '../styles/scale.scss'
import Platform from "./Platform";
import Settings from "./Settings";
export default function Scale(props) {
	const post = props.post
	const count = props.count
	return (
		<div className='scale'>
			<h2>Scale {count}</h2>
			{post.Weighnings?.map((platform, i) => {
				return (
					<>
						<Platform key={platform.id} platform={platform} count={i+1}/>
					</>
				)
			})}
			<Settings />
		</div>
	)
}