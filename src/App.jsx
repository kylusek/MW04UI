import Header from "./components/Header"
import Navbar from "./components/Navbar";
import Weighnings from "./components/Weighnings";
import './styles/main.scss'
import './styles/responsive.scss'

export default function App() {
	return (
		<>
			<Header />
			<Navbar />
			<Weighnings/>
		</>
	)
}