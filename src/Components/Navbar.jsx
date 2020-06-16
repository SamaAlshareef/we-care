import React,{Component} from 'react';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.ref = React.createRef();
        this.state={}
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


            <div className="container-fluid bg-img"  ref ={this.ref}>
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg justify-content-center  navbar-light  pt-4 px-5">
                            <a className="navbar-brand d-flex pl-6 ml-5" href="#"><h2 className="text-success">We</h2><h2 className="text-muted">Care</h2></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                                    <div className="navbar-nav ml-auto mr-5 pr-5">
                                    <a className="nav-item nav-link text-white px-4 " href="#"><h4>Home</h4> <span className="sr-only">(current)</span></a>
                                    <a className="nav-item nav-link text-white px-4" href="#"><h4>About</h4></a>
                                    <a className="nav-item nav-link text-white px-4" href="#"><h4>Service</h4></a>
                                    <a className="nav-item nav-link text-white px-4" href="#"><h4>Pricing</h4></a>
                                    <button type="button" className="btn btn-secondary  pl-4 pr-4">
                                    <h4>Sign In</h4></button>
                                </div>
                            </div>
                        </nav>
                    </div>    
                </div>
            
                
                <div className="row h-100 pt-6 mt-5 jusitfy-content-left">
                    <div className="col-5 pt-6 mt-5 pl-6 "> 
                            <div className="row">
                            <h1 className="py-5 lighter text-muted pr-4">Welcome</h1>
                            <h1 className="py-5  lighter text-success">We</h1>
                            <h1 className="py-5  lighter text-dark">Care</h1>
                            </div>
                            <h1 className="text-success montserrat display-4 ">How To Take care of </h1>
                            <h1 className="text-success montserrat-black display-4  pb-4">Newborn baby</h1>
                            <p className="pb-3">It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                that it has a more-or-less normal distribution of letters,</p>
                            <button className="btn btn-success shadow-lg p-3 mb-5 rounded">Learn More </button>
                            
                    </div>
                </div>
        </div>
            
            
            
        );

    }
}
 
export default Navbar;