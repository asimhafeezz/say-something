import { Say, Sayings } from './components';
import './styles/index.scss';

const App: React.FC = () => {
  return(
    <div>
      <Say />
      <Sayings />
    </div>
  )
}

export default App;
