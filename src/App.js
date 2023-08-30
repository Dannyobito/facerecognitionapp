import React, {Component} from "react";
import './App.css';
import Nav from "./components/Nav/Nav"
import Logo from "./components/Logo/Logo"


class App extends Component{
  render(){
    return(
      <div className="App">
        <Nav />
        <Logo/>
        {/* <ImageLinkForm/>
        <FaceRecognition/> */}

      </div>
    )
  }
}


export default App;