import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import NameList from './components/NameList';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import ConditionalRendering from './components/ConditionalRendering';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
import styles from './components/styles.module.css';
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Inline/> */}
        <h1 className={styles.success}>success</h1>
        {<h1 className={styles.error}>error</h1>}
        {/* {<Stylesheet primary={true} />} */}
        {/* <NameList/> */}
        {/* <ConditionalRendering/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
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
