import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ComponentA from './components/context/ComponentA';
import { UserProvider } from './components/context/userContext';
import ComponentD from './components/context/ComponentD';
// import Counter2 from './components/Counter2';
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import FwdRefParent from './components/FwdRefParent';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBound from './components/ErrorBound';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import FragmentTest from './components/FragmentTest';
// import Table from './components/Table';
// import ParentComp from './components/ParentComp';
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
// import styles from './components/styles.module.css';
// import Inline from './components/Inline';
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <UserProvider value="Chandan">
          <ComponentA />
        </UserProvider>

        <UserProvider value={{name : "Khushu", hairType : "very long"}}>
          <ComponentD/>
        </UserProvider>

        {/* <ComponentA /> */}

        {/* As props body: props.method() */}
        {/* <Counter2>
          {(count, countHandler) => (
            <ClickCounter2 count={count} incrementCount={countHandler} />
          )}
        </Counter2>

        <Counter2>
          {(count, countHandler) => (
            <HoverCounter2 count={count} incrementCount={countHandler} />
          )}
        </Counter2> */}

        {/* As props key: props.method() */}
        {/* <Counter2
          render={(count, countHandler) => (
            <ClickCounter2 count={count} incrementCount={countHandler} />
          )} />

        <Counter2
          render={(count, countHandler) => (
            <HoverCounter2 count={count} incrementCount={countHandler} />
          )} /> */}
        {/* <ClickCounter2/>
      <HoverCounter2/> */}
        {/* <ClickCounter name='chandan' increment={3}/>
      <HoverCounter name='khushu' increment={13}/> */}
        {/* <ErrorBound>
        <Hero heroName="Batman" />
      </ErrorBound>
      <ErrorBound>
        <Hero heroName="Joker" />
      </ErrorBound>
      <ErrorBound>
        <Hero heroName="Superman" />
      </ErrorBound> */}
        {/* <PortalDemo/> */}
        {/* <FwdRefParent /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp/> */}
        {/* <Table/> */}
        {/* <FragmentTest/> */}
        {/* <LifecycleA /> */}
        {/* <Form/> */}
        {/* <Inline/> */}
        {/* <h1 className={styles.success}>success</h1>*/}
        {/*<h1 className={styles.error}>error</h1>} */}
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
    </div >
  );
}

export default App;
