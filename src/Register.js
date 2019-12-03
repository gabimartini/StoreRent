import React, {Component} from 'react';
import './App';
import {Redirect} from 'react-router-dom' 

class register extends Component {
    constructor() {
        super();

    this.state = {
        name:'',
        surname:'',
        email:'',
        password:'',
        date:'',
        month:'',
        year:'',
        readress: false 
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

}

sendToLogin = () => {
    this.setState({
      readress: true
    })
   }

handleSubmit(e){
    const username = e.target.elements.name.value;
    localStorage.setItem('username', username)
    e.preventDefault()
    
    this.sendToLogin()
}

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
 }

    render() { 

        if(this.state.readress){
            return <Redirect to='/login'/>
        }

        return (  
        <div>

            <div id='background-form-register' style={{
                                transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                                opacity: this.props.show ? '1' : '0'
                            }}>
            
                <form id='form-register' onSubmit={this.handleSubmit} >
                    <input id='close' type='button' value="X"  onClick={this.props.close}></input><br></br>
                        <input id='input-register' type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} ></input><br></br>
                        <input id='input-register' type='text' name='name' placeholder='Name'value={this.state.name} onChange={this.handleChange} required></input><br></br>
                        <input id='input-register' type='text' name='surname' placeholder='Surname' value={this.state.surname} onChange={this.handleChange} ></input><br></br>
                        <input id='input-register' type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} ></input>
                        <p id='p-register'> Date that you were born</p>
                        <input id='date-born' type='date' Name='date' value={this.state.date} onChange={this.handleChange} ></input>
                       <br></br>
                        <button id='send-form'type='submit' value='Register' >Register</button>
                        </form>
                        </div>
                        
                       
                           
                    </div> );
    }
}
 
export default register;
