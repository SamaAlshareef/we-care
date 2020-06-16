import React, { Component } from 'react';

class BabyCareCards extends Component {
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
            <div className="container" ref={this.ref}>
                <div className="row pb-5">
                    <div className="col">
                                <h1 className="card-body text-center text-muted ">BabyCare Articles</h1>
                                <p className="card-text text-center text-muted ">A newborn baby can feel small and fragile. Learn how to care for your newborn</p>
                                <p className="card-text text-center text-muted ">and find out what</p>
                                <img className="mx-auto d-block" src="/images/line.png"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="card-deck">
                        
                        <div className="card border-0 shadow-sm p-3 mb-5 ">
                            <img className="card-img-top" src="/images/babyCare1.png" alt="Card image cap"></img>
                            <div className="card-body">
                            <h5 className="card-title">Congratulations! You have got a new member of your family</h5>
                            <p className="card-text"><small className="text-success">By Olivia-May,2019</small></p>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Integer turpis risus, rutrum
                                                imperdiet finibus in, iaculis eu leo. Duis vitae
                                                turpis augue. Sed ullamcorper faucibus
                                                volutpat. Fusce faucibus euismod auctor.</p>
                            <img src="/images/greenArrow.png"></img>
                            </div>
                        </div>
                        
                        <div className="card border-0 shadow-sm p-3 mb-5 ">
                            <img className="card-img-top" src="/images/babyCare2.png" alt="Card image cap"></img>
                            <div className="card-body">
                            <h5 className="card-title">Changing diapers frequently is an important aspect</h5>
                            <p className="card-text"><small className="text-success">By Olivia-May,2019</small></p>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Integer turpis risus, rutrum
                                                imperdiet finibus in, iaculis eu leo. Duis vitae
                                                turpis augue. Sed ullamcorper faucibus
                                                volutpat. Fusce faucibus euismod auctor.</p>
                            <img src="/images/greenArrow.png"></img>
                            </div>
                        </div>
                        <div className="card border-0 shadow-sm p-3 mb-5">
                            <img className="card-img-top" src="/images/babyCare3.png" alt="Card image cap"></img>
                            <div className="card-body">
                            <h5 className="card-title">Here's how you can make your kids eat whole grains</h5>
                            <p className="card-text"><small className="text-success">By Olivia-May,2019</small></p>
                            <p className="card-text">TLorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Integer turpis risus, rutrum
                                                    imperdiet finibus in, iaculis eu leo. Duis vitae
                                                    turpis augue. Sed ullamcorper faucibus
                                                    volutpat. Fusce faucibus euismod auctor.</p>
                            <img src="/images/greenArrow.png"></img>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BabyCareCards;