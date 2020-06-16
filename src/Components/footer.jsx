import React,{Component} from 'react';

class Footer extends Component {
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
           
          

            <footer className="page-footer font-small blue pt-4" ref ={this.ref}>
            
              
              <div className="container">
            
               
                <div className="row justify-content-center">
                  <div className="col-2">
                    
                    <h6 className="text-muted">About Us</h6>
            
                    <ul className="list-unstyled pt-2">
                      <li>
                        <p className="text-muted">Privacy and policy</p>
                      </li>
                      <li>
                        <p className="text-muted">Our Customer</p>
                      </li>
                      <li>
                        <p className="text-muted">Blog Post</p>
                      </li>
                      <li>
                        <p className="text-muted">Help & Support</p>
                      </li>
                    </ul>
            
                  </div>
                 
                  <div className="col-2">
            
                    
                    <h6 className="text-muted ">Community</h6>
            
                    <ul className="list-unstyled pt-2">
                      <li>
                        <p className="text-muted">About us</p>
                      </li>
                      <li>
                        <p className="text-muted">Our Clients</p>
                      </li>
                      <li>
                        <p className="text-muted">Legal notic</p>
                      </li>
                    </ul>
            
                  </div>
                  <div className="col-2">
            
                    
                    <h6 className="text-muted">Help & Advice</h6>
            
                    <ul className="list-unstyled pt-2">
                      <li>
                        <p className="text-muted">Help Center</p>
                      </li>
                      <li>
                        <p className="text-muted">Contpct Support</p>
                      </li>
                      <li>
                        <p className="text-muted">Instructions</p>
                      </li>
                      <li>
                        <p className="text-muted">Some Questions</p>
                      </li>
                    </ul>
            
                  </div>
                 
                  <div className="col-4 justify-content-right">
                    <img src="/images/4stars.png" ></img>
                    <h6 className="small pt-3 text-muted"> 10,000 Trust People The Full Stack design team who focuses on digital products whatever they are</h6>
                    <img src="/images/Social.png" className="pt-3"></img>
                  </div>
          
                </div>
                <div className="row justify-content-center pt-4">
                  <img src="/images/Logo.png"></img>
                </div>
               
            
              </div>
              
              <div className="footer-copyright text-center py-3 text-muted">Designed by @uiexpert-2019
              </div>
           
            
            </footer>
            
          );
    }
}
 
export default Footer;