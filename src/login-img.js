import {Component} from 'react';
import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
  import "react-datepicker/dist/react-datepicker.css";
  import { MultiLang, Determinator } from "react-multi-language";
  import {Redirect} from 'react-router-dom';
  import Filter from './Filter'

class Login extends Component {

  constructor(props) {
    super(props);

        this.state = {
            address: '',
            readress: false,       
        }    
        
    this.sendToPlace = this.sendToPlace.bind(this)
    this.handleSubmitPlace = this.handleSubmitPlace.bind(this)
  

      }

      filterList(event){
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
          return item.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
      }
    
        sendToPlace = () => {
          this.setState({
            readress: true
          })
          
         }
      
      handleSubmitPlace(e){
        
        const place = e.target.elements.address.value;
        localStorage.setItem('place', place)
        e.preventDefault();
        
        this.sendToPlace()
    
       
     
      }

    handleChangeDate = date => {
      this.setState({
        startDate: date
      });
    };

    handleChangeDateEnd = date => {
      this.setState({
        endDate: date
      });
    };
  
    handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
      };
     
      setStartDate(){
        new Date("21/11/2019")
      }
  
      setEndDate(){
        new Date("21/12/2019")
      }


    render() 
    { 

      if(this.state.readress){
        return <Redirect to='/place'/>
      }

       
        return ( 
            <div>
                <div id='menu-fixed-filter'>
                <img src='image/logo-2018.jpg' id='logo-store-filter'></img>
                  <form id='form-place-filter' onSubmit={this.handleSubmitPlace}>
                  <>
                <div id='row-menu'>
        <div id='place-complete-filter'>
        <PlacesAutocomplete  
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div id='sugestão'>
            <input
              {...getInputProps({
                placeholder: 'Where do you want rent',
                id: 'place',
              })} name='address' 
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>  
      </div>
      
      </div>
    </>
    
            
      </form>

            <nav id='menu-home-filter' className='menu-lateral'>
                <ul className='menu-login-filter'>
                <li id='Hello-user'><Determinator>
  {{
    pt: "Olá",
    en: "Hello",
    es: "¡Holla",
    it: "Ciao",
    null: "Hello"
    
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')} />, {localStorage.getItem('username')|| "Dear"}!&nbsp;&nbsp;&nbsp;&nbsp;<span>
<Determinator>
  {{
    pt: "Bem-Vindo(a) a sua loja personalizada.",
    en: "Welcome for your personal store.",
    es: "Bienvenido a tu tienda personal.",
    it: "Benvenuto per il tuo negozio personale.",
    null: "Welcome for your personal store."
    
  }} 
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')} />
  </span></li>
                <Link to="/"><button type='submit' id='link-logout-filter'><Determinator>
  {{
    pt: "Sair",
    en: "Logout",
    es: "Cerrar sesión",
    it: "Disconnettersi"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/></button></Link>
            </ul>
            </nav>
            <div id='line'></div>
            <div className="columns">
  
  </div> 


  
            </div >
            <div id='filter-login'>
         
            <Filter adress = {this.state.address} />
            </div>
            
            <div >
  
  </div>
</div>

         );
    }
}


 
export default Login;

