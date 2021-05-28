import './App.css';
import Desktop from './components/Desktop/Desktop'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <div className="App">
      <Desktop />
      <div className='mobile-app'>
          <Menu />
      </div>
    </div>
  );
}

export default App;
