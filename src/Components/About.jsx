import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {  }
    }
    handleNavigate = () => {
        let el = this.ref.current;
        
        window.scrollTo({
          behavior: "smooth",
          left: 0,
          top: el.offsetTop
        });
      };
    render() { 
        return ( 
            <div className="container-fluid" ref ={this.ref}>
                
                    <div className="card  text-white border-0">
                        <img src='./images/baby.png'  alt="..."></img>
                        <div className="card-img-overlay ">
                        <div className="row pt-5 justify-content-center">
                            <div className="col-2">
                            <img className="align-middle" src='/images/whiteLine.png'></img>
                            </div>
                        </div>
                        <div className="row pt-5 justify-content-center">
                            <div className="col">
                                <div className="align-middle">
                                <p className="card-text text-center  montserrat display-4 ">Since 2002, Baby Care Advice has assisted thousands of parents</p>
                                <p className="card-text text-center  montserrat display-4">worldwide solve minor and complex baby care problems by</p>
                                <p className="card-text text-center montserrat display-4 ">our articles and consultations.</p>
                                <h1 className="card-text text-center montserrat-black">Book a consultation now!</h1>



                                </div>
                            
                            
                            
                            
                        </div>
                        </div>
                    </div>
                </div>   
            </div>
         );
    }

}
 
export default About;