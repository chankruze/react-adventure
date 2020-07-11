import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Counter incValue={5} />
        {/* <Message/> */}
        {/* <Greet name="Bunnu" heroName="Batman">
          Yada mat mal apna nunnu !
        </Greet>
        <Welcome name="Bunnu"/> */}
      </header>
    </div>
  );
}

export default App;
