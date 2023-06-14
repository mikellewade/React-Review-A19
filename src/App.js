// import logo from './logo.svg';
import './App.css';
import Entry from './components/Entry';
function App() {
  return (
    <div className="App">
      <nav className="navbar">
          <div className="logoContainer">
              <span className="navbarTitle">my travel journal.</span>
          </div>
      </nav>
      <div className='contentContainer'>
        <Entry /> 
        <Entry />
        <Entry />
      </div>
    </div>
  );
}

export default App;
