import React, { Component } from 'react';

class Newborn extends Component {
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

            <div className="container py-5" ref ={this.ref}>
            <div className="row pb-5">
                <div className="col">
                            <h1 className="card-body text-center text-muted ">New Born</h1>
                            <p className="card-text text-center text-muted ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus,</p>
                            <p className="card-text text-center text-muted ">rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue.</p>
                            <img className="mx-auto d-block" src="/images/line.png"></img>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <div className="card-deck">
                    
                    <div className="card border-0  ">
                        <img className="card-img-top w-100" src="/images/newborn1.png" ></img>
                        <div className="card-body">
                            <h5 className="card-title text-center text-success pt-4">Clothing</h5>
                            <p className="card-text text-center text-muted">Lorem ipsum dolor sit amet</p>
                            
                        </div>
                    </div>
                    
                    <div className="card border-0 ">
                        <img className="card-img-top" src='/images/newborn2.png' alt="Card image cap"></img>.
                        <div className="card-body">
                        <h5 className="card-title text-center text-success ">Feeding</h5>
                        <p className="card-text text-center text-muted">Lorem ipsum dolor sit amet</p>
                       
                        </div>
                    </div>
                    <div className="card border-0">
                        <img className="card-img-top" src="/images/newborn3.png" alt="Card image cap"></img>
                        <div className="card-body">
                        <h5 className="card-title text-center text-success pt-3">Bedtime</h5>
                        <p className="card-text text-center text-muted">Lorem ipsum dolor sit amet</p>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Newborn;