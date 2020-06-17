import React, { Component } from 'react';
import './App.css';
import Parent from './Components/Parent';
import Artyom from 'artyom.js';
import ArtyomCommandsManager from './ArtyomCommands.js';

const Jarvis = new Artyom();

class App extends Component {
  constructor(props) {
    super(props);
    

        this.startAssistant = this.startAssistant.bind(this);
        this.stopAssistant = this.stopAssistant.bind(this);
        

        this.state = {
          artyomActive: false,
          textareaValue: "",
          artyomIsReading: false
      };

      let CommandsManager = new ArtyomCommandsManager(Jarvis);
        CommandsManager.loadCommands();

  }

  startAssistant() {
    let _this = this;

    console.log("Artyom succesfully started !");

    Jarvis.initialize({
        lang: "en-GB",
        debug: true,
        continuous: true,
        soundex: true,
        listen: true
    }).then(() => {
        // Display loaded commands in the console
        console.log(Jarvis.getAvailableCommands());

        Jarvis.say("Hello there, how are you?  Please say out numbers of the sections you wan to view");

        _this.setState({
            artyomActive: true
        });
    }).catch((err) => {
        console.error("Oopsy daisy, this shouldn't happen !", err);
    });
}

stopAssistant() {
  let _this = this;

  Jarvis.fatality().then(() => {
      console.log("Jarvis has been succesfully stopped");

      _this.setState({
          artyomActive: false
      });
      
  }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen neither!", err);

      _this.setState({
          artyomActive: false
      });
  });
}

  
  render() { 
     return (
       <React.Fragment>

         <div className="container-fluid fixed-top pt-2">

         <div className="row pt-1 pb-2">
              <div className="col">
                <div className="d-flex justify-content-start">
                <button className="btn btn-success mr-2" disabled={this.state.artyomActive} onClick={this.startAssistant}> Start</button>
                <button className="btn btn-danger" disabled={!this.state.artyomActive} onClick={this.stopAssistant}> End</button>
                </div>
              </div>
           </div> 

           <div className="row pt-1 pb-1">
              <div className="col">
                <div className="d-flex justify-content-start">
                <button className="btn btn-secondary btn-md mr-1">Header 1</button>
                <button className="btn btn-secondary btn-md">Deals 2</button>
                </div>
              </div>
           </div> 

           <div className="row pt-1 pb-1">
              <div className="col">
                <div className="d-flex justify-content-start">
                <button className="btn btn-secondary  btn-md mr-1">Newborn 3</button>
                <button className="btn btn-secondary btn-md"> Carrier 4</button>
                </div>
              </div>
           </div> 

           <div className="row pt-1 pb-1">
              <div className="col">
                <div className="d-flex justify-content-start">
                <button className="btn btn-secondary btn-md mr-1">BabyCare 5</button>
                <button className="btn btn-secondary btn-md">About 6</button>
                </div>
              </div>
           </div> 

           <div className="row pt-1 pb-1">
              <div className="col">
                <div className="d-flex justify-content-start">
                <button className="btn btn-secondary mr-1 btn-md  ">Reviews 7</button>
                <button className="btn btn-secondary btn-md">Contact 8</button>
                </div>
              </div>
           </div> 
         </div>
      <Parent/>
      </React.Fragment>  
     ); 
  }
}
 
export default App;
    
  



