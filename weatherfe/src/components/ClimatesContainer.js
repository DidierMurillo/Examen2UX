import React, { Component } from 'react'
import axios from 'axios'


class ClimatesContainer extends Component {
  	constructor(props) {
  		super(props)
  		this.state = {
    		climates: []
  		}
	}

	componentDidMount() {
  		axios.get('https://weatherbe.herokuapp.com/api/v1/climates.json')
  		.then(response => {
    		console.log(response)
    		this.setState({climates: response.data})
  		})
  		.catch(error => console.log(error))	
	}


    render() {
    	return (
      	<div>
        	Climates
      	</div>
    )
  }
}

export default ClimatesContainer