// ArtyomCommands.js

const elementRefs = {};
export default class ArtyomCommandsManager {

    
    // The ArtyomCommandsManager class expects as argument in the constructor
    // an already declared instance of Artyom.js
    constructor (ArtyomInstance){
       
        this._artyom = ArtyomInstance;
    }
    
    clickHandler =(p)=>{

        p.handleNavigate();
    }
 
    // clickHandler_ =()=>{
    //     console.log(elementRefs[1])
    //     elementRefs[1].handleNavigate();
    // }
    // clickHandler__ =()=>{
    //     console.log(elementRefs[1])
    //     elementRefs[2].handleNavigate();
    // }
    
 

    // Execute the loadCommands method to inject the methods to the instance of Artyom
    loadCommands(){
        let Artyom = this._artyom;

        // Here you can load all the commands that you want to Artyom
        return Artyom.addCommands([
            {
                indexes: ["1"],
                action: 
                    ()=>this.clickHandler(elementRefs[0])
                
            },
            {
                indexes: ["2"],
                action: 
                    ()=>this.clickHandler(elementRefs[1])
                
            },
            {
                indexes: ["3"],
                action: 
                
                     ()=>this.clickHandler(elementRefs[2])
                
            },
            {
                indexes: ["4"],
                action: 
                    ()=>this.clickHandler(elementRefs[3])
                
            },
            {
                indexes: ["5"],
                action: 
                    ()=>this.clickHandler(elementRefs[4])
                
            },
            {
                indexes: ["6"],
                action: 
                    ()=>this.clickHandler(elementRefs[5])
                
            },
            {
                indexes: ["7"],
                action: 
                    ()=>this.clickHandler(elementRefs[6])
                
            },
            {
                indexes: ["8"],
                action: 
                    ()=>this.clickHandler(elementRefs[7])
                
            },
          
        ]);
    }

    
}

export{ elementRefs }