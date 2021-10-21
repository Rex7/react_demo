import { Component } from 'react';
import { BrowserRouter, Switch, Route,useHistory } from 'react-router-dom';
import Welcome from './components/Welcome';



class App extends Component {

 render(){
   return(
     <div>
     <Header/>
     <Login/>
     <Footer/>
     </div>
   )
 }
}
class Header extends Component{
  render(){
    return(
      <div id="header">
             <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/login">E-Comm</a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="/temp">Home</a></li>
                    <li><a href="/temp">Gadget</a></li>
                    <li><a href="/temp">Groceries</a></li>
                    <li><a href="/demo">Fashion</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="/temp"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="/temp"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}
class Login extends Component{
  
  constructor(props){
    super(props);
    this.state={
      apiResponse:"",
      sucess :"",
      username :"",
      password : "",
       
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  callAPI(username,password) {
 
     fetch("http://localhost:9000/login",{
      method : "post",
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username : username,
        password : password
      })
    })
        .then(res => res.text())
        .then(res=>{
          if(res === "successfully"){
            console.log("inside res"+res);
           // window.location = "/Welcome";
          
            
          }  
        });
        console.log(" what is here"+this.apiResponse);     
    
        
}

demo = e => 
{
  e.preventDefault();
  this.callAPI(e.target[0].value,e.target[1].value);
};


onChangeHandler(event){
  this.setState({username:event.target.username})
  this.setState({password:event.target.password})
}
  render(){
    return(      
      <div id="loginBody">        
        <p> welcome {this.state.apiResponse} </p>
        <form  style={{width:'500px',margin :'auto'}}  onSubmit={this.demo}>
  <div class="form-group"  >
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    value={this.state.username}   onChange={this.onChangeHandler} placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" 
    onChange={this.onChangeHandler}
    value={this.state.password}placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit"  >Submit</button>
</form>
      </div>
    )
  }
}
class Footer extends Component{
  render(){
    return(
<div class="container">

  <div class="row">  
      <div class="col-md-3 col-sm-6">  
        <div class="footer-pad">  
          <h4> Footer Heading 1</h4>  
          <ul class="list-unstyled">  
            <li> <a href="#"> </a> </li>  
            <li> <a href="#">Payment Center</a></li>  
            <li> <a href="#"> Contact Directory </a></li>  
            <li> <a href="#">Forms</a></li>  
            <li> <a href="#">News and Updates</a></li>  
            <li> <a href="#">FAQs</a></li>  
          </ul>  
        </div>  
      </div> 
      <div class="col-md-3 col-sm-6">  
        <div class="footer-pad">  
          <h4> Footer Heading 2</h4>  
          <ul class="list-unstyled">  
            <li><a href="#"> Blog </a> </li>  
            <li><a href="#">Accessibility</a> </li>  
            <li><a href="#">Disclaimer</a></li>  
            <li><a href="#">Privacy Policy</a></li>  
            <li><a href="#">FAQs</a></li>  
            <li><a href="#">Webmaster</a></li>  
          </ul>  
        </div>  
      </div>  
      <div class="col-md-3 col-sm-6">  
        <div class="footer-pad">  
          <h4> Footer Heading 2</h4>  
          <ul class="list-unstyled">  
            <li><a href="#"> Blog </a> </li>  
            <li><a href="#">Accessibility</a> </li>  
            <li><a href="#">Disclaimer</a></li>  
            <li><a href="#">Privacy Policy</a></li>  
            <li><a href="#">FAQs</a></li>  
            <li><a href="#">Webmaster</a></li>  
          </ul>  
        </div>  
      </div>  
      <div class="col-md-3 col-sm-6">  
        <div class="footer-pad">  
          <h4> Footer Heading 2</h4>  
          <ul class="list-unstyled">  
            <li><a href="#"> Blog </a> </li>  
            <li><a href="#">Accessibility</a> </li>  
            <li><a href="#">Disclaimer</a></li>  
            <li><a href="#">Privacy Policy</a></li>  
            <li><a href="#">FAQs</a></li>  
            <li><a href="#">Webmaster</a></li>  
          </ul>  
        </div>  
      </div>  
      <div class="col-md-3">  
            <h4> Follow Us </h4>  
            <ul class="social-network social-circle">  
             <li> <a href="#" class="icoFacebook" title="Facebook"> <i class="fa fa-facebook"> </i> </a> </li>  
             <li> <a href="#" class="icoLinkedin" title="Linkedin"> <i class="fa fa-linkedin"> </i> </a> </li>  
    <li> <a href="#"> <i class="fa fa-youtube" aria-hidden="true"> </i> </a> </li>  
            </ul>               
    </div>  
  </div>
  <div class="row">  
    <div class="col-md-12 copy">  
    <p class="text-center"> © Copyright 2021 - Company Name.  All rights reserved. </p>  
    </div>  
    </div>
  
</div>
    )
  }
}

export default App;
