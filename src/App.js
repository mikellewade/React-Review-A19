// import logo from './logo.svg';
import "./App.css";
import Entry from "./components/Entry";
import data from "./data";

function App() {

  const entryComponents = data.map( entry => {
    return <Entry key={entry.id} entry={entry} /> 
  })

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logoContainer">
          <span className="navbarTitle">my travel journal.</span>
        </div>
      </nav>
      <div className="contentContainer">
        {entryComponents}
      </div>
    </div>
  );
}

export default App;
