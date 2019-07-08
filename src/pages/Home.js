import React from 'react';
import {First} from '../component/Header';
import Signup from './Signup';
import { Row, Col } from "react-bootstrap";

class Home extends React.Component {

    render(){
        return (
        	<Row className="show-grid">
			    <Col xs={6} md={4}>
			      
			    </Col>
			    <Col xs={6} md={4}>	
		        	<First name="Register Form"/>
		        	<Signup/>
		        </Col>
			    <Col xsHidden md={4}>

			    </Col>
		    </Row>
        )
    }
}

export default Home;