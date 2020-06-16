import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import FooterCard from'./footerCard';
import Reviews from './Reviews';
import About from './About';
import BabyCareCards from './BabyCareCards';
import BestDealsCards from './BestDealsCards';
import Newborn from './Newborn';
import BabyCarrier from './BabyCarrier';
import { elementRefs } from '../ArtyomCommands.js';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.parentRef = React.createRef();
        this.state = {  };
       
    }

   clickHandler =(p)=>{
       p.handleNavigate();
   }

   componentDidMount()
   {
       console.log(elementRefs[0]);
       console.log(elementRefs[1]);
       console.log(elementRefs[2]);
   }
    render() { 
        return ( 
        <React.Fragment>
        <Navbar  ref={el => elementRefs[0] = el}/>
        <BestDealsCards ref={el => elementRefs[1] = el} />
        <Newborn  ref={el => elementRefs[2] = el}/>
        <BabyCarrier  ref={el => elementRefs[3] = el}/>
        <BabyCareCards ref={el => elementRefs[4] = el}/>
        <About ref={el => elementRefs[5] = el}/>
        <Reviews ref={el => elementRefs[6] = el}/>
        <FooterCard ref={el => elementRefs[7] = el}/>
        <Footer ref={el => elementRefs[8] = el}/>
        </React.Fragment>
        );
    }
}
 
export default Parent;