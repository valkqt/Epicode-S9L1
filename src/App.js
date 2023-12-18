// import logo from "./logo.svg";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent.jsx"
import ClassButton from "./components/ClassComponent.jsx"
import Welcome from "./components/Welcome.jsx"
// import Button from "./components/Button.jsx"
// import { useState } from "react"

function App() {
  // const [showButton, setShowButton] = useState(true);
  
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <main>
        <Welcome name="Pepe"/>
<div>
          <ClassButton buttonDesc="Wojak" src="images/2.jpg" action={() => {alert('this man loves his job')}}/>
          {/* <button onClick={() => setShowButton(!showButton)}>
            Toggle button
          </button> */}
          <FunctionalComponent buttonDesc="Paperino" src="images/1.webp" action={() => {alert('this man hates his job')}}/>
  
</div>      </main>
    </div>
  );
}



export default App;
