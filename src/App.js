import React, { Component } from "react";
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";


const app = new Clarifai.App({
  apiKey : 'b514d7b4548a4865bbfd8dcd8fb166dc',
});

const particlesOptions = {
  particles: {
    number : {
      value : 60,
      density : {
        enable : true,
        value_area : 800
      }
    }
  }
};

class App extends Component { 
  constructor() {
    super();
    this.state = {
      input : ''
    }
  }

  oninputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("b514d7b4548a4865bbfd8dcd8fb166dc", "https://samples.clarifai.com/face-det.jpg").then(
      function(response){
        console.log(response);
      },
      function(err){
        //there was an error
      }
    )

  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
        params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          oninputChange={ this.oninputChange } 
          onButtonSubmit={this.onButtonSubmit}/>
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
