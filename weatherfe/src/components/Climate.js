import React from 'react'
import './Climate.css'
import {Jumbotron} from 'reactstrap'

const Climate = ({climate}) =>
  <div className="tile" key={climate.id}>
    <Jumbotron className="JumboProduct">
    	<h3 className='Town'>Town:{climate.town}</h3>
    	<p className='Temperature'> Temperature:{climate.temperature}°</p>
    	<p className='Status'>Status:{climate.status}!</p>
  	</Jumbotron>
  </div>

export default Climate