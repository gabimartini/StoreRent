import {Component} from 'react';
import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import { MultiLang, Determinator } from "react-multi-language";
import {Redirect} from 'react-router-dom';



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
    
        sendToPlace = () => {
          this.setState({
            readress: true
          })
          
         }
      
      handleSubmitPlace(e){
       
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
                <div id='menu-fixed'>
                <img src='image/logo-2018.jpg' id='logo-store'></img>
                  <form id='form-place' onSubmit={this.handleSubmitPlace}>
                  <>
                <div id='row-menu'>
                <button type='submit' id='search'><img src='image/lupa.png' id='img-search' ></img></button>
                <p id='link-search'><Determinator>
  {{
    pt: "Busque sua cidade",
    en: "Search your place",
    es: "Busca tu lugar",
    it: "Cerca il tuo posto"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={this.state.lang}/></p>
       
  
      
      </div>
    </>
    
            
      </form>
            <nav id='menu-home' className='menu-lateral'>
                <ul className='menu-login'>
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
<MultiLang lang={localStorage.getItem('language')} />, {localStorage.getItem('username') || "Dear"}!&nbsp;&nbsp;&nbsp;&nbsp;<span>
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
                <Link to="/"><button type='submit' id='link-logout'><Determinator>
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
                    
            </div>
          

            <h2 id='title-wekeend'>
   <Determinator>
  {{
    pt: "Roupas que vão salvar seu final de semana, estão aqui!",
    en: "Clothes that will save your weekend, are here!",
    es: "¡La ropa que salvará tu fin de semana está aquí!",
    it: "I vestiti che salveranno il tuo weekend, sono qui!",
    null: "Clothes that will save your weekend, are here!",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>   
  </h2> 


   <img src='image/closet-image-7.jpg' id='image-top'></img>
   
  
    <h2 id='title-winter'>
    <Determinator>
  {{
    pt: "Encontre roupas aconchegantes para o inverno",
    en: "Get cosy clothes for this Winter",
    es: "Consigue ropa acogedora para este invierno",
    it: "Ottieni abiti accoglienti per questo inverno",
    null:"Get cosy clothes for this Winter"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>   
    </h2>

    

    <p id='p-winter'>
    <Determinator>
  {{
    pt: "Fique aquecido quando chegar o inverno",
    en: "Keep warm as the wether turns",
    es: "Mantente caliente mientras el tiempo gira",
    it: "Tieni caldo mentre il tempo si gira",
    null: "Keep warm as the wether turns",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  
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
    it: "Abito elegante, confortevole e di charme",
    null: "Fancy, confortable and charm dress",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  
     <br></br>
     Gucci<br></br>
     {localStorage.getItem('sign')|| "£"}: {Math.ceil(10*(localStorage.getItem('money'))) || 10}  /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  
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
    it: "Abiti comodi e di stile",
    null: "Confortable and style clothes",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>

    <br></br>
     Gucci<br></br>
     {localStorage.getItem('sign') || "£"}: {Math.ceil(15*(localStorage.getItem('money')))||15}   /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/Gucci-winter-3.jpg" className='summer-photo' id='summer-3' />
     <figcaption className='legend'><span>Germany</span><br></br>
     <Determinator>
  {{
    pt: "Vestido luxuoso e glamuroso",
    en: "Luxury and glam dress",
    es: "Vestido de lujo y glamour",
    it: "Abito di lusso e glam",
    null: "Luxury and glam dress",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
     <br></br>
     Gucci<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(25*(localStorage.getItem('money')))||25}  /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/></figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/Gucci-winter-4.jpg" alt='' className='summer-photo' id='summer-4' />
    <figcaption className='legend'><span>England</span><br></br>
    <Determinator>
  {{
    pt: "Roupas modernas e aconchegantes",
    en: "Modern and cosy clothes",
    es: "Ropa moderna y acogedora",
    it: "Abiti moderni e accoglienti",
    null: "Modern and cosy clothes",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
     <br></br>
     Gucci<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(20*(localStorage.getItem('money')))||20}  /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>
</div> 
    

    <h2 id='title-world'>
    <Determinator>
  {{
    pt: "Lugares em todo mundo onde você pode alugar roupas",
    en: "Place where you can rent clothes in all the world",
    es: "Lugar donde puedes alquilar ropa en todo el mundo",
    it: "Luogo in cui è possibile noleggiare abiti in tutto il mondo",
    null: "Place where you can rent clothes in all the world",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
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
    it: "Abiti colorati e unissex",
    null: "Colorfull and unissex clothes",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
     <br></br>
     Mini Rodini<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(10*(localStorage.getItem('money')))||10}  /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/mini-rodini-2.jpg" className='summer-photo' id='world-2' />
     <figcaption className='legend'><span>Toquio</span><br></br>
     <Determinator>
  {{
    pt: "Confortável, estilosa e divertida",
    en: "Comfort, style and funy",
    es: "Comodidad, estilo y diversión.",
    it: "Comfort, stile e divertimento",
    null: "Comfort, style and funy",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
    <br></br>
    Alexandre Herchcovitch<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(12*(localStorage.getItem('money')))||12} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/miami-f-01.jpg" className='summer-photo' id='world-3' />
     <figcaption className='legend'><span>London</span><br></br>
     <Determinator>
  {{
    pt: "Delicado, artesanal e confortável",
    en: "Delicate, handmade and confortable",
    es: "Delicado, artesanal y confortable",
    it: "Delicato, fatto a mano e confortevole",
    null: "Delicate, handmade and confortable",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
    <br></br>
    Hellen Röedel<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(7*(localStorage.getItem('money')))||7} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/miami-m-01.jpg" alt='' className='summer-photo' id='world-4' />
     <figcaption className='legend'><span>Barcelona</span><br></br>
     <Determinator>
  {{
    pt: "Charmoso, estiloso e confortável",
    en: "Charm, style and Confort",
    es: "Encanto, estilo y confort",
    it: "Fascino, stile e comfort",
    null: "Charm, style and Confort",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
    <br></br>
     Motoreta Kids<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(8*(localStorage.getItem('money')))||8} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>
</div> 

    <h2 id='title-summer'>
    <Determinator>
  {{
    pt: "Férias na praia?",
    en: "Going for Hollidays on the beach?",
    es: "¿Vas de vacaciones a la playa?",
    it: "Andare per Hollidays sulla spiaggia?",
    null: "Going for Hollidays on the beach?",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
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
    it: "Confortevole, affascinante e femminile",
    null: "Comfortable, charm and girly",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
    <br></br>
     Amor de Ciranda<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(6*(localStorage.getItem('money')))||6} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/ciranda-023.jpg" className='summer-photo' id='summer-2' />
     <figcaption className='legend'><span>Cancun</span><br></br>
     <Determinator>
  {{
    pt: "Unissex, confortável e moderno",
    en: "Unissex, comfortable and modern",
    es: "Unissex, confortable y moderno",
    it: "Unissex, confortevole e moderno",
    null: "Unissex, comfortable and modern",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
     <br></br>
     Amor de Ciranda<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(8*(localStorage.getItem('money')))||8} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/tokyo-m-02.jpg" className='summer-photo' id='summer-3' />
     <figcaption className='legend'><span>San Diego</span><br></br>
     <Determinator>
  {{
    pt: "Artesanal, bordado e delicado",
    en: "Handmade clothes, embroidery and delicate",
    es: "Ropa hecha a mano, bordados y delicados",
    it: "Abiti fatti a mano, ricami e delicati",
    null: "Handmade clothes, embroidery and delicate",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
    <br></br>
    Ronaldo Fraga<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(10*(localStorage.getItem('money')))||10} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/manchester-f-01.jpg" alt='' className='summer-photo' id='summer-4' />
     <figcaption className='legend'><span>Sardenha</span><br></br>
     <Determinator>
  {{
    pt: "Bordado, confortável e feminino",
    en: "Handmade embroidery, comfortable and girly",
    es: "Bordados hechos a mano, cómodos y femeninos",
    it: "Ricamo fatto a mano, comodo e femminile",
    null: "Handmade embroidery, comfortable and girly",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
     <br></br>
     Stella McCartney<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(8*(localStorage.getItem('money')))||8} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>
</div> 

    <h2 id='title-asian'>
    <Determinator>
  {{
    pt: "Encontre roupas para casamento",
    en: "Find Wedding clothes",
    es: "Encuentra ropa de boda",
    it: "Trova abiti da sposae",
    null: "Find Wedding clothes",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
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
    it: "Fresco, confortevole e delicato",
    null: "Fresh, comfort and delicate",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
     <br></br>
     Clotpin Martimm<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(12*(localStorage.getItem('money')))||12} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/jane-wedding.jpg" className='summer-photo' id='wedding-2' />
     <figcaption className='legend'><span>Florença</span><br></br>
     <Determinator>
  {{
    pt: "Feminina, luxuosa e charmosa",
    en: "Girly, luxury and charm",
    es: "Femenino, lujo y encanto",
    it: "Girly, lusso e fascino",
    null: "Girly, luxury and charm",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
     <br></br>
     Jane Wedding<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(18*(localStorage.getItem('money')))||18} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    en: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/noisy-forest-wedding.jpg" className='summer-photo' id='wedding-3' />
     <figcaption className='legend'><span>Berlin</span><br></br>
     <Determinator>
  {{
    pt: "Confortável, doce e moderno",
    en: "Comfortable, sweet and modern",
    es: "Cómodo, dulce y moderno",
    it: "Confortevole, dolce e moderno",
    null: "Comfortable, sweet and modern",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
    <br></br>
     Amor de Ciranda<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(11*(localStorage.getItem('money')))||11} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>  </figcaption>
</div>

<div className='coluna' id='coluna-left-2'>
    <img src="image/wedding-woman-02.jpg" alt='' className='summer-photo' id='wedding-4' />
     <figcaption className='legend'><span>Sidney</span><br></br>
     <Determinator>
  {{
    pt: "Artesanal, fresca e charmosa",
    en: "Handmade clothes, fresh and charm",
    es: "Ropa hecha a mano, fresca y con encanto",
    it: "Abiti fatti a mano, freschi e di charme",
    null: "Handmade clothes, fresh and charm",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/>
    <br></br>
    Elie Saab<br></br>
{localStorage.getItem('sign') || "£"}: {Math.ceil(9*(localStorage.getItem('money')))||9} /<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno",
    null: "day",
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')}/></figcaption>
</div>
</div> 

</div>
         );
    }
}


 
export default Login;