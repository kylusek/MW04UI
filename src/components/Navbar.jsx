export default function Navbar() {
	const colCount = () => {
		//TODO: navbar working
		const count = document.getElementById('colCounter').value;
		console.log(count);
		//document.getElementsByClassName('scales').style.gridTemplateColumns = `repeat(` + count + `, 1fr)`;
	}
	return (
		<>
			<input type='number' id='colCounter' onChange={colCount}/>
		</>
	)
}