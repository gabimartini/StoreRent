import React, {Component} from 'react';
import {Redirect} from 'react-router-dom' 
import './App';



class enter extends Component {
    constructor() {
        super();

    this.state = {
        name:'',
        email:'',
        password:'',
        isShow: false,
        redirect: false 
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

}

openCadasterHandler = () => {
    this.setState({
        isShow: true
    });
}

closeCadasterHandler = () => {
    this.setState({
        isShow: false
    });
}

callLogin = () => {
    this.setState({
      redirect: true
    })
   }


handleSubmit(e){
    const username = e.target.elements.name.value;
    localStorage.setItem('username', username)
    e.preventDefault()
    
    this.callLogin()
        
   }


handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
   
}

    render() { 
       
        if(this.state.redirect){
            return <Redirect to='/login'/>
        }
            
    return (
        <div>

<div id='background-form-register' style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>

    <form id='form-enter' onSubmit={this.handleSubmit} >
            <input id='close' type='button' value="X"  onClick={this.props.close}></input><br></br>
            <h2 id='h2-enter'>Enter for continue</h2><br></br>
            <input id='name' className='input-enter' type='text' name='name' placeholder='Name'value={this.state.name} onChange={this.handleChange} required></input><br></br>
            <input id='email' className='input-enter' type='email' placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} ></input><br></br>
            <input id='password' className='input-enter' type='password' placeholder='Password' name='password' value={this.state.email} onChange={this.handleChange} ></input>
            <button id='send-form'type='submit' value='Enter'>Enter</button>
            </form>
            </div>

          

            
           
               
        </div>
    )
}

}

export default enter;