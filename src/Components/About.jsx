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
                            <img className="align-middle img-fluid" src='/images/whiteLine.png' alt=".."></img>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col d-flex flex-column align-items-center ">
                               
                                <h1 className="card-text  text-center montserrat  ">Since 2002, Baby Care Advice has assisted thousands of parents</h1>
                                <h1 className="card-text  text-center montserrat">worldwide solve minor and complex baby care problems by</h1>
                                <h1 className="card-text text-center montserrat ">our articles and consultations.</h1>
                                <h1 className="card-text text-center montserrat-black">Book a consultation now!</h1>



                                
                            
                        </div>
                        </div>
                    </div>
                </div>   
            </div>
         );
    }

}
 
export default About;