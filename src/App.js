import './App.css';
import Desktop from './components/Desktop/Desktop'

function App() {
  return (
    <div className="App">
      <Desktop />
      <div className='mobile-app'>
          <img className='logo-image-mobile' src="logo.png" alt="logo" />
      </div>
    </div>
  );
}

export default App;
