import { Say, Sayings, Footer } from "./components"
import "./styles/index.scss"

const App: React.FC = () => {
	return (
		<div>
			<Say />
			<Sayings />
			<Footer />
		</div>
	)
}

export default App
