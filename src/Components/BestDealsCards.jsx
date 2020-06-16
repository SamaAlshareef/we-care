import React, { Component} from 'react';

class BestDealsCards extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
       
        this.state = { 
         
         }
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
            
            <div className="container" ref={this.ref} >
                <div className="row pb-5">
                    <div className="col">
                                <h1 className="card-body text-center text-muted ">Best Deals</h1>
                                <p className="card-text text-center text-muted ">A newborn baby can feel small and fragile. Learn how to care for your newborn</p>
                                <p className="card-text text-center text-muted ">and find out what</p>
                                <img className="mx-auto d-block" src="/images/line.png"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src="/images/care1.png" className="img-fluid"></img>
                    </div>
                    <div className="col-4">
                        <img src="/images/care2.png" className="img-fluid"></img>
                    </div>
                    <div className="col-4">
                        <img src="/images/care3.png" className="img-fluid"></img>
                    </div>
                    
                </div>
            </div>
             
        );
    }
    
}
 
export default BestDealsCards;