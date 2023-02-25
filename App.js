import logo from './logo.svg';

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import signin from "./signin/signin"
import Header from "./navbar/navbar"
import signup from "./signup/signup"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Contextprovider>
        <Route path='/' element ={<signin/>}/>
        <Route path='/signup'element={<signup/>}/>
        
      </Contextprovider>
      </BrowserRouter>
    </div>
  );
}

export default App;
