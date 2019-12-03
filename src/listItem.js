import React from 'react';
import { MultiLang, Determinator } from "react-multi-language";
import language from './language';


function ListItem(props){
  const { children, className = '', url, price , city, gender, money, language,
        hireDate, id, description, onClick, toolPosition, sign } = props;
  const toolCls = toolPosition === 'left' ? 'item-tools-left' : '';

   
  const price_= Number(price)
const pt = description.pt
const es = description.es
const en = description.en
const it = description.it


  return (
    
    <div
      className={`list-item ${className} ${toolCls}`}
      onClick={onClick}
      data-id={id}
    >
      <div className="body">
      
  <div className="main" id='description'><img  src={url} className='summer-photo'/><br></br><Determinator>
  {{
    pt: pt,
    en: en,
    es: es,
    it: it
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')|| language}/><br></br>{city}</div>
        <div className="secondary" id='description'>
          {localStorage.getItem('sign')|| sign}: {(Math.ceil(price_*(localStorage.getItem('money')))) || price}/<Determinator>
  {{
    pt: "dia",
    en: "day",
    es: "día",
    it: "giorno"
  }}
</Determinator>
{/*MultiLang component must be after all the Determinators*/}
<MultiLang lang={localStorage.getItem('language')|| language}/>

        </div>
      </div>

      <div className="tools">{children}</div>
      <br></br>
    </div>
  );
};

export default ListItem;