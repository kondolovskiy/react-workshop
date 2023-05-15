import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Search from './Components/Search';
import ImagesList from './Components/ImagesList';

function App() {
  return (
    <div className="App">
      <Search />
      <ImagesList />
    </div>
  );
}

export default App;
