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
      imageUrl: '',
      box: {},
    }
  }


  calculateFaceLocation = (data)=> {
     const clarifaiFaceBox = data.outputs[0].data.regions[0].region_info.bounding_box;
     const face = document.getElementById('face');
     const imageWidth = Number(face.width);
     const imageHeight = Number(face.height);
     console.log(imageHeight,imageWidth);
     return {
      left: clarifaiFaceBox.left_col*imageWidth,
      top: clarifaiFaceBox.top_row * imageHeight,
      right: imageWidth-(clarifaiFaceBox.right_col*imageWidth),
      bottom: imageHeight-(clarifaiFaceBox.bottom_row * imageHeight),
     };
  }
  displayFaceBox = (box) => {
    this.setState({box:box})
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
    return(
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Nav />
        <Logo/>
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
      </div>
    )
  }
}

export default App;
