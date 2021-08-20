import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router } from  'react-router-dom';
import ItemsListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar />
        </Router>
        <ItemsListContainer titulo="Productos" />
        <ItemDetailContainer />
    </div>
  );
}

export default App;
