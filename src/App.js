import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: '08e96657bedd4606a49fcc5e187a2573'
});


class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
    
  }
  onSubmit = () =>{
    console.log('clicked');
    app.models.predict('face-detection', 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')
    .then(response => {
        console.log(response)
          }).catch(err => console.log(err));
  }
  

  render() {
    return(
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Nav />
        <Logo/>
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition/>
      </div>
    )
  }
}

export default App;
