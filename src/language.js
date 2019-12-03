import React, {Component} from 'react';
import './App';
import {Redirect} from 'react-router-dom' 




class language extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            reselect: false, 
            
        }
  
        this.handleSubmit = this.handleSubmit.bind(this)
        }

        handleSubmit(e){
            e.preventDefault();
          
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
            
                <form id='form-register' onSubmit={this.handleSubmit}>
                <input id='close' type='button' value="X"  onClick={this.props.close}></input><br></br>
                        <button id='send-language'type='submit' value='BRL' onClick={this.props.onchangept}>Portuguese</button>
                        <button id='send-language'type='submit' value='GBP' onClick={this.props.onchangees}>Spanish</button>
                        <button id='send-language'type='submit' value='EUR' onClick={this.props.onchangeen}>English</button>
                        <button id='send-language'type='submit' value='USD' onClick={this.props.onchangeit}>Italian</button>
                        
                        </form>
                        </div>
                        


                        </div>    
        );          
    }
}
 
export default language;