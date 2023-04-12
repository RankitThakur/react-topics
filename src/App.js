import { Route, Routes } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
///csss
import './App.css';
////components
import ExpenseItem from './components/ExpenseItem';
import PropsWithClass from './components/PropsWithClass';
import FunctionClick from './components/FunctionClick';
import Inputfiled from './components/Inputfiled';
import HideShow from './components/hideShow';
import Form from './components/Form';
import Login from './components/Login';
import LifeCycle from './components/LifeCycle';
import HookUseEffect from './components/HookUseEffect';
import Home from './components/routers/Home'
import About from './components/routers/About';
import { NavBar } from './components/routers/NavBar';
import ChildComponent from './components/childcomponent';
import { Page404 } from './components/Page404';
import { UserPage } from './components/UserPage';
import { PreviousState } from './components/PreviousState';
import { ApiMethod } from './ApiCalling/GetMethod'
import {PostApi} from './ApiCalling/PostAPi'
import { Context } from './components/context-api/Context';


function App () {

return <> 
  <BrowserRouter>
  {/* <NavBar/> */}
  <Routes>
    {/* <Route path='/home' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/test' element={<ChildComponent/>}></Route>
    <Route path='/*' element = {<Page404/>}></Route> */}
    {/* <Route path='/user/:name' element = {<UserPage/>}></Route> */}
    {/* <Route path='/login' element = {<Login/>}></Route> */}
  </Routes>
  </BrowserRouter>
  {/* <ApiMethod/> */}
  {/* <PostApi/> */}
  {/* <PreviousState/> */}
  <Context/>

  </>
}

export default App;



















// function App() {
//   // const [data, setData] = useState(null);
//   // const number = 0 

//   // useEffect(() => { 
//   //   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   //   .then(response => response.json()) 
//   //   .then(parsedData => {
//   //     data = setData(parsedData);
//   //   })
//   //   // .catch(error => console.error(error))
//   // }, []);
//   return (
//     <div>
//       {/* <h2>App.js file</h2> */}
//       {/* <HideShow />
      
//       <Inputfiled/>
//       <FunctionClick/>
//       <ExpenseItem data="hy demo"> </ExpenseItem>
//       <PropsWithClass propsData = { number }></PropsWithClass> */}
//       {/* <Form/> */}
//       {/* <Login/> */}
//       {/* <LifeCycle/> */}
//       {/* <HookUseEffect/> */}
//     </div>
//     );
// }
