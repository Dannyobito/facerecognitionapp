import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
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
      imageUrl: '',
      boxes:[],
      isSignedIn: false,
      route: 'signin'
    }
  }


  onRouteChange = (route) => {
    this.setState({route:route});
    if(route === 'signin'){
      this.setState({isSignedIn:false});
    }
    if(route === 'home'){
      this.setState({isSignedIn:true});
    }
  }

  calculateFaceLocation = (data)=> {
     const regions = data.outputs[0].data.regions;
     const face = document.getElementById('face');
     const imageWidth = Number(face.width);
     const imageHeight = Number(face.height);
     let clarifaiFaceBoxes = regions.map((box)=>{
      console.log('region',box);
      let clarifaiFaceBox = box.region_info.bounding_box;
      console.log('cfb',clarifaiFaceBox);
      return {
        left: clarifaiFaceBox.left_col*imageWidth,
        top: clarifaiFaceBox.top_row * imageHeight,
        right: imageWidth-(clarifaiFaceBox.right_col*imageWidth),
        bottom: imageHeight-(clarifaiFaceBox.bottom_row * imageHeight),
      };
     })
     return clarifaiFaceBoxes;
  }
  displayFaceBox = (boxes) => {
    console.log('dfbboxes',boxes);
    this.setState({boxes:boxes})
  }
  onInputChange = (event) =>{
    this.setState({input:event.target.value});
    
  }
  onSubmit = () =>{
    this.setState({imageUrl:this.state.input})
    app.models.predict('face-detection', this.state.input)
    .then(response => {
      this.displayFaceBox(this.calculateFaceLocation(response));
    }).catch(err => console.log(err));
  }
  

  render() {
    if(this.state.route === 'home' ||this.state.isSignedIn === true) {
      return(
        <div className="App">
          <ParticlesBg type="cobweb" bg={true}/>
          <Nav onRouteChange={this.onRouteChange}/>
          <Logo/>
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
          <FaceRecognition imageUrl={this.state.imageUrl} boxes={this.state.boxes}/>
        </div>
      )
    }
    else if(this.state.route === 'signin' && this.state.isSignedIn === false){
      return(
        <SignIn onRouteChange={this.onRouteChange}/>
      )
    }
    else if(this.state.route === 'register' && this.state.isSignedIn === false){
      return(
        <Register onRouteChange={this.onRouteChange}/>
      )
    }
  }
}

export default App;
