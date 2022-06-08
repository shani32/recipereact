
import './App.css';
import Category from './components/Category';
import Pages from './pages/Pages';
import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
