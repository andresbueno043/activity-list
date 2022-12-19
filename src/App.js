import logo from './logo.svg';
import './App.css';
import { ActivityList } from './components/ActivityList';

function App() {
  return (
    <div className="App">
      <h1>
        Activity List by Andres Bueno
      </h1>
      <div className='main-container'>
        <h2>My activities</h2>
        <ActivityList />
      </div>
    </div>
  );
}

export default App;
