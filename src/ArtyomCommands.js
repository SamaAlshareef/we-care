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
                indexes: ["1","one"],
                action: 
                    ()=>this.clickHandler(elementRefs[0])
                
            },
            {
                indexes: ["2","do","to","two"],
                action: 
                    ()=>this.clickHandler(elementRefs[1])
                
            },
            {
                indexes: ["3","free","three"],
                action: 
                
                     ()=>this.clickHandler(elementRefs[2])
                
            },
            {
                indexes: ["4","for","four"],
                action: 
                    ()=>this.clickHandler(elementRefs[3])
                
            },
            {
                indexes: ["5","five"],
                action: 
                    ()=>this.clickHandler(elementRefs[4])
                
            },
            {
                indexes: ["6","six"],
                action: 
                    ()=>this.clickHandler(elementRefs[5])
                
            },
            {
                indexes: ["7","seven"],
                action: 
                    ()=>this.clickHandler(elementRefs[6])
                
            },
            {
                indexes: ["8","eight"],
                action: 
                    ()=>this.clickHandler(elementRefs[7])
                
            },
          
        ]);
    }

    
}

export{ elementRefs }