import React, {Component} from "react";
import './App.css';
import ParticlesBg from 'particles-bg'
import Nav from "./components/Nav/Nav"
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm"
import Rank from "./components/Rank/Rank"


class App extends Component{
  
  render(){
    return(
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Nav />
        <Logo/>
        <Rank />
        <ImageLinkForm/>
        {/* <FaceRecognition/> */}

      </div>
    )
  }
}


export default App;