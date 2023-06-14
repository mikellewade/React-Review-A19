// import logo from './logo.svg';
import './App.css';
import Entry from './components/Entry';
import data from './data';
function App() {
  // console.log(data)
  const entry = data[0]
  return (
    <div className="App">
      <nav className="navbar">
          <div className="logoContainer">
              <span className="navbarTitle">my travel journal.</span>
          </div>
      </nav>
      <div className='contentContainer'>
        <Entry entry={entry} /> 
        <Entry />
        <Entry />
      </div>
    </div>
  );
}

export default App;
