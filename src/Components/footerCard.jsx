import React, { Component } from 'react';

class footerCard extends Component {
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
            <div className="container" ref ={this.ref}>
                <div className="row">
                <div className="card text-white border-0">
                    <img className="card-img" src="/images/rectangle2.png" alt="Card image"></img>
                    <div className="card-img-overlay d-flex">
                        <div className="col-9 ">
                            <div className=" float-left">
                                <h2 className="card-body montserrat display-4  ">Sign up for our newsletter</h2>
                                <h2 className="card-body   montserrat-black display-4 ">Newborn baby</h2>
                            </div>
                        </div>
                        <div className="col-3 pt-5">
                            <div className="d-flex justify-content-center align-items-start">
                            <button className="btn btn-secondary  shadow p-3 mb-5  rounded" >Get started</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
         );
    }
}
 
export default footerCard;