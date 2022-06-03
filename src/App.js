import logo from './logo.svg';
import './App.css';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Icon from './components/Icon.js';
import Navbar from './components/Navbar.js';
import NavLink from './components/NavLink.js';

function App() {
  return (
    
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
