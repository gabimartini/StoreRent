import React, {Component} from 'react';
import './App';
import {Redirect} from 'react-router-dom' 





class money extends Component {
   
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
                        <button id='send-money'type='submit'  onClick={this.props.onChangebrl}>BRL</button>
                        <button id='send-money'type='submit'  onClick={this.props.onChangegbp} >GBP</button>
                        <button id='send-money'type='submit'  onClick={this.props.onChangeeur}>EUR</button>
                        <button id='send-money'type='submit'  onClick={this.props.onChangeusd} >USD</button>
                        
                        
                        </form>

                        
                        </div>
                        

         
                       

                    </div>


                           
                   );
    }
}
 
export default money;

/*changeLang = () => {
            this.setState(state => ({ lang: state.lang === "en" ? "fr" : "en" }));
          
            
          }*/
