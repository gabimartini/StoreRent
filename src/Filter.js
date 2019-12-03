import * as React from 'react'
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import Place from './place'
import DatePicker from 'react-datepicker'




class Filter extends React.Component {

  constructor() {
    super();

this.state = {
  price: 150,
  selectedOption: 'child',
  startDate: new Date(),
  endDate: new Date(),
}

this.onChangeRange = this.onChangeRange.bind(this)
this.onSubmitRange = this.onSubmitRange.bind(this)
this.onChangeGender = this.onChangeGender.bind(this)
this.onSubmitGender = this.onSubmitGender.bind(this)
this.onSubmitDate = this.onSubmitDate.bind(this)
this.setStartDate = this.setStartDate.bind(this)
this.setEndDate = this.setEndDate.bind(this)
}
  
  
  onChangeRange(e){
    this.setState({
      [e.target.name]: e.target.value
  })

    }

    onChangeGender(e){
      this.setState({
      selectedOption: e.target.value
        })
      
        
      }


  onSubmitRange(e){
    const price = e.target.price.value;
    localStorage.setItem('price', price)

    e.preventDefault();
   
  }

   
  onSubmitGender(e){
    
    const gender = this.state.selectedOption;
    localStorage.setItem('gender', gender)

    e.preventDefault();
   
  }

  setStartDate(){
    new Date("21/11/2019")
  }

  setEndDate(){
    new Date("21/12/2019")
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

  onSubmitDate(e){
    
    const dateEnd = this.state.endDate;
    const dayEnd = dateEnd.getDate() + '/' + (dateEnd.getMonth() + 1) + '/' + dateEnd.getFullYear() 
    localStorage.setItem('endDate', dayEnd);

    const dateStart = this.state.startDate;
    const dayStart = dateStart.getDate() + '/' + (dateStart.getMonth() + 1) + '/' + dateStart.getFullYear() 
    localStorage.setItem('startDate', dayStart)

    e.preventDefault();
    
   
  }

  

  render() {

const adress = this.props.adress
   
    return (
      <div >

        <div id='form-search'>
        <div id='pesquisa'> 
        <form onSubmit={this.onSubmitRange}>
            <label id='price'>Price</label><br></br>
            <label id='label-price'>{this.state.price}</label><br></br>
            <label id='min'>0</label> 

            <input type='range' name='price' className="slider" min="0" max="300" id='price-range' value={this.state.price} onChange={this.onChangeRange} onSubmit={true} ></input>
            <label id='max'>300</label><br></br>
           
            </form>
            <form onSubmit={this.onSubmitGender} id='gender-filter'>
            <input className='gender' type='radio' name="gender" value= "child" checked={this.state.selectedOption==='child'} onChange={this.onChangeGender} />Children
            <input className='gender' type='radio' name="gender" value="female" checked={this.state.selectedOption==='female'} onChange={this.onChangeGender} />Female
            <input className='gender' type='radio' name="gender" value="male" checked={this.state.selectedOption==='male'} onChange={this.onChangeGender} />Man<br></br>
           
            </form>
            <form id='date-filter' onSubmit={this.onSubmitDate}>
              <div id='label-date-div'>
              <label id='label-date'>Date Start</label><br></br>
              </div>
            <DatePicker  id='date'
        selected={this.state.startDate}
        onChange={this.handleChangeDate}
        selectsStart
        startDate={this.state.startDate}
        endDate={this.state.endDate}
      /><br></br>
      <div id='label-date-div-return'>
      <label id='label-date-return'>Date Return</label><br></br>
      </div>
       <DatePicker  id='date-back'
        selected={this.state.endDate}
        onChange={this.handleChangeDateEnd}
        selectsEnd
        endDate={this.state.endDate}
        minDate={this.state.startDate}
      /><br></br>
      
      </form>
      <div id='line-search'></div>
            </div>
            </div>
    
<div>
<div style={{width: '400px'}}>
 
 
</div>
<p>{this.props.adress_home}</p>

<div id='place-img-filter'>
            <Place  adress_home= {this.props.adress_home} adress = {this.props.adress} price={this.state.price} gender={this.state.selectedOption} dateEnd={this.state.endDate} dateStart={this.state.startDate}/>
            </div>
            <div></div>
    
</div>

      </div>
    )
  }
}

export default Filter

