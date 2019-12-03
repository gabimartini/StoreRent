import React, {useState} from 'react';
import data from './data';
import ListItem from './listItem';


const filterCity = localStorage.getItem('place')
const p = localStorage.getItem('price')
const price_ = Number(p)
const g = localStorage.getItem('gender')
const end = localStorage.getItem('endDate')
const start = localStorage.getItem('startDate')

/*const foto =data.filter( filterCity )*/

function Place (props){
   const adress = props.adress
  const price = props.price
  const gender = props.gender
  const Enddate = props.dateEnd
  const Startdate = props.dateStart
  const dayEnd = Enddate.getDate() + '/' + (Enddate.getMonth() + 1) + '/' + Enddate.getFullYear() 
  const dayStart = Startdate.getDate() + '/' + (Startdate.getMonth() + 1) + '/' + Startdate.getFullYear() 
  const status = (adress ==! " ") ? "London, Reino Unido" : adress

  return(
 <div>

  <div style={{width: '400px'}}>
 
       {data.filter(function(item) {
    return item.city === (status) && (Math.ceil(item.price*(localStorage.getItem('money')))|| item.price) <= price && item.gender === gender && (dayStart < item.dateStart || dayStart > item.dateEnd || null)  && (dayEnd > item.dateEnd || dayEnd < item.dateStart || null)
    
  }).map(teste =>
        <ListItem key={teste.id} {...teste}/>
      )}
  </div>
  </div>
  )};

export default Place;

