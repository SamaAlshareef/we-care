import React, { Component, isValidElement } from 'react';

class BabyCarrier extends Component {
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

            <div className="container-fluid pb-5" ref = {this.ref}>
                <div className="row align-items-center">
                    <div className="col-6">
                        <img src="/images/babyCarrier.png" alt=".."></img>
                    </div>
                    <div className="col-6">
                        <div className="pl-5 pt-4">
                        <h1 className=" text-muted">Baby Carrier on Air</h1>
                        <p className=" text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus,</p>
                        <p className=" text-muted">rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue.</p>
                        <h2 className="text-success py-4">Price $299.99</h2>
                        <button className="btn btn-success">View Details</button>
                        </div>
                    </div>
                        
                        
                    
                </div>
            </div>
         );
    }
}
 
export default BabyCarrier;