import {Component} from 'react';
import React from 'react';
import './App.css';
import Enter from './enter'
import Register from './Register'
import Money from './Money'
import "react-datepicker/dist/react-datepicker.css";
import {Redirect} from 'react-router-dom';
import Language from './language';
import { MultiLang, Determinator } from "react-multi-language";
import axios from 'axios'



  

  
class Home extends Component {
   
    constructor(props) {
        super(props);
  
        this.state = {
            isShowing: false,
            isOpen: false,
            isShowLanguage: false,
            isOpenMoney: false,
            address: '',
            readress: false,
            lang: "en",
            money:1,
            sign: "£",
            language: 'English',
            sign_money:"£UK",
           
        }   
      

        this.sendToPlace = this.sendToPlace.bind(this)
    this.handleSubmitPlace = this.handleSubmitPlace.bind(this)
    this.handleClickbrl = this.handleClickbrl.bind(this)
    this.handleClickeur = this.handleClickeur.bind(this)
    this.handleClickgbp= this.handleClickgbp.bind(this)
    this.handleClickusd = this.handleClickusd.bind(this)
    
           
    }


    
  
    handleClickusd () {
      let GBP=''
      let sign = '$'
      
      axios.get('https://economia.awesomeapi.com.br/all/GBP-BRL')
        .then(response => GBP=(response.data.GBP.high))
      axios.get('https://economia.awesomeapi.com.br/all/USD-BRL')
        .then(response =>       
          this.setState({money: (parseInt(GBP) /parseInt(response.data.USD.high)), sign: '$', sign_money:"$USA"}))
          axios.get('https://economia.awesomeapi.com.br/all/USD-BRL')
        .then(response =>       
          localStorage.setItem('money', (parseInt(GBP) /parseInt(response.data.USD.high))))
          localStorage.setItem('sign', sign)

    }

    handleClickbrl () {
      let sign = 'R$'
      axios.get('https://economia.awesomeapi.com.br/all/GBP-BRL')
        .then(response => this.setState({money: parseInt(response.data.GBP.high), sign: 'R$', sign_money:"R$BR"}))
        axios.get('https://economia.awesomeapi.com.br/all/GBP-BRL')
        .then(response =>       
          localStorage.setItem('money', (parseInt(response.data.GBP.high))))
          localStorage.setItem('sign', sign)
      
    }

    handleClickeur () {

      let GBP=''
      let sign = '€'
      axios.get('https://economia.awesomeapi.com.br/all/GBP-BRL')
        .then(response => GBP= (response.data.GBP.high))
      axios.get('https://economia.awesomeapi.com.br/all/CHF-BRL')
        .then(response =>       
          this.setState({money: (parseInt(GBP) /parseInt(response.data.CHF.high)), sign:'€', sign_money:"€EUR"}))
          axios.get('https://economia.awesomeapi.com.br/all/CHF-BRL')
        .then(response =>       
          localStorage.setItem('money', (parseInt(GBP) /parseInt(response.data.CHF.high))))
          localStorage.setItem('sign', sign)
    }

    handleClickgbp () {
      let GBP=''
      let sign = '£'
      axios.get('https://economia.awesomeapi.com.br/all/GBP-BRL')
        .then(response => GBP=(response.data.GBP.high))
      axios.get('https://economia.awesomeapi.com.br/all/GBP-BRL')
        .then(response => this.setState({money:(parseInt(GBP) /parseInt(response.data.GBP.high)), sign: '£', sign_money:"£UK"}))
        axios.get('https://economia.awesomeapi.com.br/all/GBP-BRL')
        .then(response =>       
          localStorage.setItem('money', (parseInt(GBP) /parseInt(response.data.GBP.high))))
          localStorage.setItem('sign', sign)
      }

    

    sendToPlace = () => {
      this.setState({
        readress: true
      })
      
     }
  
  handleSubmitPlace(e){
      e.preventDefault();
    
    this.sendToPlace()
  }

  handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
 }


       openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }
  
    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    openEnterHandler = () => {
        this.setState({
            isOpen: true
        });
    }
  
    closeEnterHandler = () => {
        this.setState({
            isOpen: false,
            
        });
    }

    openLanguage = () => {
      this.setState({
          isShowLanguage: true
      });
  }

  closeLanguageHandler = () => {
      this.setState({
          isShowLanguage: false,
          
      });
  }

  openMoney = () => {
    this.setState({
        isOpenMoney: true
    });
}

  closeMoneyHandler = () => {
    this.setState({
        isOpenMoney: false,
        
    });
}

changeLangPT = (e) => {
  this.setState(state => ({ lang: state.lang === "en" ? "pt" : "pt", language:"Português" }));
  const language = 'pt';
    localStorage.setItem('language', language)
    
};

changeLangES = () => {
  this.setState(state => ({ lang: state.lang === "en" ? "es" : "es", language:"Español" }));
  const language = 'es';
  localStorage.setItem('language', language)
};

changeLangIT = () => {
  this.setState(state => ({ lang: state.lang === "en" ? "it" : "it", language:"Italiano" })); 
  const language = 'it';
  localStorage.setItem('language', language)
};

changeLangEN = () => {
  this.setState(state => ({ lang: state.lang === "pt"|| "es"|| "it" ? "en" : "en", language:"English" }));
  const language = 'en';
  localStorage.setItem('language', language)

  
};
  
     

    render() 
    
    { 

      if(this.state.readress){
        return <Redirect to='/place'/>
    }

    

        return ( 
          
            <div>
             
                <div id='menu-fixed'>
                <img src='image/logo-2018.jpg' id='logo-store'></img>
                  <form id='form-place' onSubmit={this.handleSubmitPlace}>
                  <>
                <div id='row-menu'>
                <button type='submit' id='search'><img src='image/lupa.png' id='img-search' ></img></button>
                <p id='link-search'> <Determinator>
  {{
    pt: "Busque sua cidade",
    en: "Search your place",
    es: "Busca tu lugar",
    it: "Cerca il tuo posto"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
                  </p>
           
      </div>
    </>
    
            
      </form>

            <nav id='menu-home'>
                <ul className='menu-list'>
            <li><button className="open-modal-btn" onClick={this.openLanguage}>{this.state.language}</button></li>
            <li><button className="open-modal-btn" onClick={this.openMoney}>{this.state.sign_money}</button></li>
                    <li><button className="open-modal-btn" onClick={this.openModalHandler}>Register</button></li>
                    <li><button className="open-modal-btn" onClick={this.openEnterHandler}>Enter</button></li>
                    
                </ul>
            </nav>
            <div id='line'></div>
                    
            </div>

            <div>
                { this.state.isShowLanguage ? <div onClick={this.closeLanguageHandler} onClick={this.changeLangPT} onClick={this.changeLangEN} onClick={this.changeLangES} onClick={this.changeLangIT} className="back-drop"></div> : null }

                <Language
                    className="modal"
                    show={this.state.isShowLanguage}
                    close={this.closeLanguageHandler}
                    onSubmit={this.handleSubmitLanguage}
                    onchangept={this.changeLangPT}
                    onchangees={this.changeLangES}
                    onchangeen={this.changeLangEN}
                    onchangeit={this.changeLangIT}
                    >    
                       
                </Language>
            </div>

            <div>
                { this.state.isOpenMoney ? <div onClick={this.closeMoneyHandler} onClick={this.handleClickbrl} 
                onClick={this.handleClickgbp} 
                onClick={this.handleClickeur}  
                onClick={this.handleClickusd} className="back-drop"></div> : null }

                <Money
                    className="modal"
                    show={this.state.isOpenMoney}
                    close={this.closeMoneyHandler}
                    onChangebrl={this.handleClickbrl}
                    onChangeeur={this.handleClickeur}
                    onChangegbp={this.handleClickgbp}
                    onChangeusd={this.handleClickusd}
                    >     
                </Money>
            </div>

            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <Register
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    onSubmit={this.handleSubmit}>       
                </Register>
            </div>

            <div>
                { this.state.isOpen ? <div onClick={this.closeEnterHandler} className="back-drop"></div> : null }

                <Enter
                    className="modal"
                    show={this.state.isOpen}
                    close={this.closeEnterHandler}
                    >     
                </Enter>
            </div>
           
            
   <h2 id='title-wekeend'>
   <Determinator>
  {{
    pt: "Roupas que vão salvar seu final de semana, estão aqui!",
    en: "Clothes that will save your weekend, are here!",
    es: "¡La ropa que salvará tu fin de semana está aquí!",
    it: "I vestiti che salveranno il tuo weekend, sono qui!"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>   
  </h2> 


   <img src='image/closet-image-7.jpg' id='image-top'></img>
   
  
    <h2 id='title-winter'>
    <Determinator>
  {{
    pt: "Encontre roupas aconchegantes para o inverno",
    en: "Get cosy clothes for this Winter",
    es: "Consigue ropa acogedora para este invierno",
    it: "Ottieni abiti accoglienti per questo inverno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>   
    </h2>

    

    <p id='p-winter'>
    <Determinator>
  {{
    pt: "Fique aquecido quando chegar o inverno",
    en: "Keep warm as the wether turns",
    es: "Mantente caliente mientras el tiempo gira",
    it: "Tieni caldo mentre il tempo si gira"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  
    </p>

    <div id='row'>
<div className='coluna' id='coluna-left'>
    <img src="image/gucci-woman.jpg" className='summer-photo' id='summer-1' />
     <figcaption className='legend' ><span>Italy</span><br></br>
     <Determinator>
  {{
    pt: "Elegante, confortável e charmoso vestido",
    en: "Fancy, confortable and charm dress",
    es: "Vestido elegante, cómodo y encantador.",
    it: "Abito elegante, confortevole e di charme"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  
     <br></br>
     Gucci<br></br>
     {this.state.sign}: {(10*this.state.money)}  /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  
     </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/gucci-man.jpg" className='summer-photo' id='summer-2' />
     <figcaption className='legend'><span>France</span><br></br>
     <Determinator>
  {{
    pt: "Roupas confortáveis e estilosas",
    en: "Confortable and style clothes",
    es: "Ropa cómoda y elegante",
    it: "Abiti comodi e di stile"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>

    <br></br>
     Gucci<br></br>
     {this.state.sign}: {Math.ceil(15*this.state.money)}   /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/Gucci-winter-3.jpg" className='summer-photo' id='summer-3' />
     <figcaption className='legend'><span>Germany</span><br></br>
     <Determinator>
  {{
    pt: "Vestido luxuoso e glamuroso",
    en: "Luxury and glam dress",
    es: "Vestido de lujo y glamour",
    it: "Abito di lusso e glam"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
     <br></br>
     Gucci<br></br>
{this.state.sign}: {Math.ceil(25*this.state.money)}  /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/></figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/Gucci-winter-4.jpg" alt='' className='summer-photo' id='summer-4' />
    <figcaption className='legend'><span>England</span><br></br>
    <Determinator>
  {{
    pt: "Roupas modernas e aconchegantes",
    en: "Modern and cosy clothes",
    es: "Ropa moderna y acogedora",
    it: "Abiti moderni e accoglienti"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
     <br></br>
     Gucci<br></br>
{this.state.sign}: {Math.ceil(20*this.state.money)}  /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>
</div> 
    

    <h2 id='title-world'>
    <Determinator>
  {{
    pt: "Lugares em todo mundo onde você pode alugar roupas",
    en: "Place where you can rent clothes in all the world",
    es: "Lugar donde puedes alquilar ropa en todo el mundo",
    it: "Luogo in cui è possibile noleggiare abiti in tutto il mondo"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
      </h2>
    <div id='row'>
<div className='coluna' id='coluna-left'>
    <img src="image/mini-rodini-1.jpg" className='summer-photo' id='world-1' />
     <figcaption className='legend'><span>São Paulo</span><br></br>
     <Determinator>
  {{
    pt: "Coloridas e unissex roupas",
    en: "Colorfull and unissex clothes",
    es: "Ropa colorida y unissex",
    it: "Abiti colorati e unissex"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
     <br></br>
     Mini Rodini<br></br>
{this.state.sign}: {Math.ceil(10*this.state.money)}  /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/mini-rodini-2.jpg" className='summer-photo' id='world-2' />
     <figcaption className='legend'><span>Toquio</span><br></br>
     <Determinator>
  {{
    pt: "Confortável, estilosa e divertida",
    en: "Comfort, style and funy",
    es: "Comodidad, estilo y diversión.",
    it: "Comfort, stile e divertimento"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
    <br></br>
    Alexandre Herchcovitch<br></br>
{this.state.sign}: {Math.ceil(12*this.state.money)} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/miami-f-01.jpg" className='summer-photo' id='world-3' />
     <figcaption className='legend'><span>London</span><br></br>
     <Determinator>
  {{
    pt: "Delicado, artesanal e confortável",
    en: "Delicate, handmade and confortable",
    es: "Delicado, artesanal y confortable",
    it: "Delicato, fatto a mano e confortevole"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
    <br></br>
     Hellen Röedel<br></br>
{this.state.sign}: {Math.ceil(7*this.state.money)} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/miami-m-01.jpg" alt='' className='summer-photo' id='world-4' />
     <figcaption className='legend'><span>Barcelona</span><br></br>
     <Determinator>
  {{
    pt: "Charmoso, estiloso e confortável",
    en: "Charm, style and Confort",
    es: "Encanto, estilo y confort",
    it: "Fascino, stile e comfort"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
    <br></br>
     Motoreta Kids<br></br>
{this.state.sign}: {Math.ceil(8*this.state.money)} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>
</div> 

    <h2 id='title-summer'>
    <Determinator>
  {{
    pt: "Férias na praia?",
    en: "Going for Hollidays on the beach?",
    es: "¿Vas de vacaciones a la playa?",
    it: "Andare per Hollidays sulla spiaggia?"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
      </h2>

  <div id='row'>
<div className='coluna' id='coluna-left'>
    <img src="image/ciranda-002.jpg" className='summer-photo' id='summer-1' />
     <figcaption className='legend'><span>Florianópolis</span><br></br>
     <Determinator>
  {{
    pt: "Confortável, charmoso e feminino",
    en: "Comfortable, charm and girly",
    es: "Cómodo, encantador y femenino",
    it: "Confortevole, affascinante e femminile"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
    <br></br>
     Amor de Ciranda<br></br>
{this.state.sign}: {Math.ceil(6*this.state.money)} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/ciranda-023.jpg" className='summer-photo' id='summer-2' />
     <figcaption className='legend'><span>Cancun</span><br></br>
     <Determinator>
  {{
    pt: "Unissex, confortável e moderno",
    en: "Unissex, comfortable and modern",
    es: "Unissex, confortable y moderno",
    it: "Unissex, confortevole e moderno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
     <br></br>
     Amor de Ciranda<br></br>
{this.state.sign}: {Math.ceil(8*this.state.money)} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/tokyo-m-02.jpg" className='summer-photo' id='summer-3' />
     <figcaption className='legend'><span>San Diego</span><br></br>
     <Determinator>
  {{
    pt: "Artesanal, bordado e delicado",
    en: "Handmade clothes, embroidery and delicate",
    es: "Ropa hecha a mano, bordados y delicados",
    it: "Abiti fatti a mano, ricami e delicati"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
    <br></br>
     Ronaldo Fraga<br></br>
{this.state.sign}: {Math.ceil(10*this.state.money)} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/manchester-f-01.jpg" alt='' className='summer-photo' id='summer-4' />
     <figcaption className='legend'><span>Sardenha</span><br></br>
     <Determinator>
  {{
    pt: "Bordado, confortável e feminino",
    en: "Handmade embroidery, comfortable and girly",
    es: "Bordados hechos a mano, cómodos y femeninos",
    it: "Ricamo fatto a mano, comodo e femminile"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
     <br></br>
     Stella McCartney<br></br>
{this.state.sign}: {Math.ceil(8*this.state.money)} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>
</div> 

    <h2 id='title-asian'>
    <Determinator>
  {{
    pt: "Encontre roupas para casamento",
    en: "Find Wedding clothes",
    es: "Encuentra ropa de boda",
    it: "Trova abiti da sposae"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
     </h2>
    <div id='row'>
<div className='coluna' id='coluna-left'>
    <img src="image/wedding-woman-01.jpg" className='summer-photo' id='wedding-1' />
     <figcaption className='legend'><span>Rio de Janeiro</span><br></br>
     <Determinator>
  {{
    pt: "Fresca, confortável e delicada",
    en: "Fresh, comfort and delicate",
    es: "Fresco, cómodo y delicado",
    it: "Fresco, confortevole e delicato"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
     <br></br>
     Clotpin Martimm<br></br>
{this.state.sign}: {Math.ceil(12*this.state.money)} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/jane-wedding.jpg" className='summer-photo' id='wedding-2' />
     <figcaption className='legend'><span>Florença</span><br></br>
     <Determinator>
  {{
    pt: "Feminina, luxuosa e charmosa",
    en: "Girly, luxury and charm",
    es: "Femenino, lujo y encanto",
    it: "Girly, lusso e fascino"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
     <br></br>
     Jane Wedding<br></br>
{this.state.sign}: {Math.ceil(18*this.state.money)} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/noisy-forest-wedding.jpg" className='summer-photo' id='wedding-3' />
     <figcaption className='legend'><span>Berlin</span><br></br>
     <Determinator>
  {{
    pt: "Confortável, doce e moderno",
    en: "Comfortable, sweet and modern",
    es: "Cómodo, dulce y moderno",
    it: "Confortevole, dolce e moderno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
    <br></br>
     Amor de Ciranda<br></br>
{this.state.sign}: {Math.ceil(11*this.state.money)} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/wedding-woman-02.jpg" alt='' className='summer-photo' id='wedding-4' />
     <figcaption className='legend'><span>Sidney</span><br></br>
     <Determinator>
  {{
    pt: "Artesanal, fresca e charmosa",
    en: "Handmade clothes, fresh and charm",
    es: "Ropa hecha a mano, fresca y con encanto",
    it: "Abiti fatti a mano, freschi e di charme"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/>
    <br></br>
     Elie Saab<br></br>
{this.state.sign}: {Math.ceil(9*this.state.money)} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/></figcaption>
</div>
</div> 

</div>
         );
    }
}


 
export default Home;

/*<DatePicker  id='date'
        selected={this.state.startDate}
        onChange={this.handleChangeDate}
        selectsStart
        startDate={this.state.startDate}
        endDate={this.state.endDate}
      />
       <DatePicker  id='date-back'
        selected={this.state.endDate}
        onChange={this.handleChangeDateEnd}
        selectsEnd
        endDate={this.state.endDate}
        minDate={this.state.startDate}
      />
      <input id='search' type='button' value='Search' ></input>*/
