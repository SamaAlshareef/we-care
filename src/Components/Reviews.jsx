import React, { Component } from 'react';

class Reviews extends Component {
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

            <div className="container-fluid py-5" ref ={this.ref}>
                <div className="row">
                    <div className="col pb-5">
                        <h1 className="text-muted text-center">Customer Reviews</h1>
                        <p className="text-muted text-center"> A new born baby can feel small and fragile. Learn how to care for your newborn</p> 
                        <p className="text-muted text-center">and find out</p>
                        <img className="mx-auto d-block" src='/images/line.png'></img>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8 ">
                    <div className="card-deck">
                        <div className="card shadow-sm p-3 mb-5 bg-white rounded border-0">
                            <div className="card-body">
                            <h5 className="card-title">John L.Clarkson</h5>
                            <h5 className="small text-success">a day ago</h5>
                            <img src='/images/5stars.png'></img>
                            <p className="card-text pt-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>  
                        </div>
                        <div className="card shadow-sm p-3 mb-5 bg-white rounded border-0">
                            <div className="card-body">
                            <h5 className="card-title">Todd Jefferies</h5>
                            <h5 className="small text-success">10 days ago</h5>
                            <img src='/images/4stars.png'></img>
                            <p className="card-text pt-3">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>  
                        </div>
                        <div className="card shadow-sm p-3 mb-5 bg-white rounded border-0">
                            <div className="card-body ">
                            <h5 className="card-title">Jackie Parker</h5>
                            <h5 className="small text-success">a month ago</h5>
                            <img src='/images/4stars.png'></img>
                            <p className="card-text pt-3">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Reviews;