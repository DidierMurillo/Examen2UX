import React, { Component } from 'react'
import axios from 'axios'
import Climate from './Climate'
import update from 'immutability-helper'
import './ClimatesContainer.css'
import {Jumbotron} from 'reactstrap'


class ClimatesContainer extends Component {
  	constructor(props) {
  		super(props)
  		this.state = {
    		climates: [],
    		town:'',
  			temperature:'150',
  			status:'Rainy'
  		}
	}

	componentDidMount() {
  		axios.get('https://weatherbe.herokuapp.com/api/v1/climates')
  		.then(response => {
    		console.log(response)
    		this.setState({climates: response.data})
  		})
  		.catch(error => console.log(error))	
	}



	addNewIdea = (ttown,ttemperature,tstatus) => {
  		axios.post(
    	'https://weatherbe.herokuapp.com/api/v1/climates',
    	{climate:
      		{
        		town: this.town,
        		temperature: this.temperature,
        		status: this.status
      		}
    	})
  	    .then(response => {
    	console.log(response)
    	const climates = update(this.state.climates, {
      	$splice: [[0, 0, response.data]]
    })
    	this.setState({climates: climates})
  	})
  	.catch(error => console.log(error))
	}

	TownInput = (e) => {
 	 	this.town=e.target.value
 	 	console.log(this.town)
	}

	TemperatureInput = (e) => {
 	 	this.temperature=e.target.value
 	 	console.log(this.temperature)
	}

	StatusInput = (e) => {
 	 	this.status=e.target.value
 	 	console.log(this.status)
	}

    render() {
    	return (
    <div>
      
      	{this.state.climates.map((climate) => {
  			return (<Climate climate={climate} key={climate.id} />)
		})}
	  		
	  
  		<Jumbotron className='J'>		
			<form className='Form'>
 	 			<input className='input' type="text"
    				name="ttown" placeholder='Enter Town'
    				onChange={this.TownInput} />
  				<input className='input' name="tstatus"
    				placeholder='Whats the temperature?'
    				onChange={this.TemperatureInput}>
  				</input>
  				 <select onChange={this.StatusInput} >
  					<option value="Rainy">Rainy</option>
  					<option value="Claudy">Claudy</option>
  					<option value="Sunny">Sunny</option>

  				</select> 	

			</form>
			
				<button className="newclimate"
	  				onClick={this.addNewIdea} >
	  				New Climate Historial
				</button>
		</Jumbotron>
		



    </div>
  );
  }
}

export default ClimatesContainer