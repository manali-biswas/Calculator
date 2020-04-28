import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const CalculatorTitle = (props) =>{
    return(
      <h1 className="cal">Manali's Calculator</h1>
    );
  }


const Button = (props) => {
  return(
    <input className="btn" type="button" value={props.label} onClick={props.handleClick}/>
  );
}

const OutputScreenRow = (props) => {
  return (
    <div className= "screen-row">
      <input className="input" type="text" value={props.value}  readOnly/>      
    </div>
  );
}

const OutputScreen = (props) => {
  return (
    <div className="screen">
      <OutputScreenRow value={props.question}/>
      <OutputScreenRow value={props.answer}/>
     </div>
  );
}

class Calculator extends React.Component {
  constructor(){
    super();
    
    this.state={
      question:'',
      answer:''
    }
    
    this.handleClick=this.handleClick.bind(this);
  }
  
  handleClick(event){
    const value=event.target.value;
    
    switch(value){
      case '=': {
        if(this.state.question!=='')
          {
            var ans='';
            try{// eslint-disable-next-line
              ans=eval(this.state.question);
            }
            catch(err){
              this.setState({answer:'Math error'});
            }
            if(ans===undefined||(ans===''))
              this.setState({answer:'Math error'});
            else
              this.setState({answer:ans});
            break;
          }
		  break;
      }
      case 'AC':{
        this.setState({answer:'', question:''});
            break;
      }
      case 'C':{
        var str=this.state.question;
        str=str.substr(0,str.length-1);
        this.setState({ question:str});
            break;
      }
      default:{// eslint-disable-next-line
        this.setState({ question: this.state.question+= value});        
    break;
    }
    }
  }
  render(){
    return(
      <div className="frame">
        <div className="title">
          <CalculatorTitle /></div>
      <div className="mainCal">
        <OutputScreen question={this.state.question} answer={this.state.answer}/>
        <div className="button-row">
          <Button label={'AC'} handleClick={this.handleClick}/>
          <Button label={'C'} handleClick={this.handleClick}/>
          <Button label={'.'} handleClick={this.handleClick}/>
          <Button label={'/'} handleClick={this.handleClick}/>
        </div>
        <div className="button-row">
          <Button label={'7'} handleClick={this.handleClick}/>
          <Button label={'8'} handleClick={this.handleClick}/>
          <Button label={'9'} handleClick={this.handleClick}/>
          <Button label={'*'} handleClick={this.handleClick}/>
        </div>
        <div className="button-row">
          <Button label={'4'} handleClick={this.handleClick}/>
          <Button label={'5'} handleClick={this.handleClick}/>
          <Button label={'6'} handleClick={this.handleClick}/>
          <Button label={'-'} handleClick={this.handleClick}/>
        </div>
        <div className="button-row">
          <Button label={'1'} handleClick={this.handleClick}/>
          <Button label={'2'} handleClick={this.handleClick}/>
          <Button label={'3'} handleClick={this.handleClick}/>
          <Button label={'+'} handleClick={this.handleClick}/>
        </div>
        <div className="button-row">
          <Button label={'0'} handleClick={this.handleClick}/>
          <Button label={'='} handleClick={this.handleClick}/>          </div>
        
        </div>
        </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
