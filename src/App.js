import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <EventBind/>
        {/* <FunctionClick/>*/}
        {/*<ClassClick/> */}
        {/* <Counter /> */}
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
