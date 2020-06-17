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
                    <img className="img-fluid" src="/images/rectangle2.png" alt=".."></img>
                    <div className="card-img-overlay img-fluid d-flex align-items-center">
                        <div className="col-9 d-flex flex-column  align-items-left">
                           
                                <h2 className="card-text text-center montserrat ">Sign up for our newsletter</h2>
                                <h2 className="card-text text-center  montserrat-black  ">Newborn baby</h2>
                            
                        </div>
                        <div className="col-3 ">
                            <div className="d-flex ">
                            <button className="btn btn-secondary btn-bock btn-sm shadow p-3 mb-5  rounded" >Get started</button>
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