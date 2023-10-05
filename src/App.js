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
import { data } from 'autoprefixer';

//You must add your own API key here from Clarifai.
// const app = new Clarifai.App({
//  apiKey: '08e96657bedd4606a49fcc5e187a2573'
// });


class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      boxes:[],
      isSignedIn: false,
      route: 'signin',
      user:{
        id: '',
        username: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }
  
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      username: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,

    }})
  }
  onRouteChange = (route) => {
    this.setState({route:route});
    if(route === 'signin'){
      this.setState({isSignedIn:false, imageUrl: ''});
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
      let clarifaiFaceBox = box.region_info.bounding_box;
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
    this.setState({boxes:boxes})
  }
  onInputChange = (event) =>{
    this.setState({input:event.target.value});
    
  }
  onSubmit = () =>{
    this.setState({imageUrl:this.state.input})
    fetch('http://localhost:3999/imageUrl',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          imageUrl : this.state.input
        })          
      }).then(response => response.json())
    .then(data => {
      if(data){
        fetch('http://localhost:3999/image',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id : this.state.user.id
            })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries:count}))
        })
      }
      this.displayFaceBox(this.calculateFaceLocation(data));
    }).catch(err => console.log(err))
  }
  

  render() {
    if(this.state.route === 'home' ||this.state.isSignedIn === true) {
      return(
        <div className="App">
          <ParticlesBg type="cobweb" color="white" bg={true}/>
          <Nav onRouteChange={this.onRouteChange}/>
          <Logo/>
          <Rank user={this.state.user} />
          <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
          <FaceRecognition imageUrl={this.state.imageUrl} boxes={this.state.boxes}/>
        </div>
      )
    }
    else if(this.state.route === 'signin' && this.state.isSignedIn === false){
      return(
        <div className='App'>
          <ParticlesBg type="cobweb" color="white" bg={true}/>
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        </div>
        
      )
    }
    else if(this.state.route === 'register' && this.state.isSignedIn === false){
      return(
        <div>
          <ParticlesBg type="cobweb" color="white" bg={true}/>
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        </div>
        
      )
    }
  }
}

export default App;
