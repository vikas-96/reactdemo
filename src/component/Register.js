import React from 'react';
import { Form, Button, FormGroup, FormControl, FormLabel, Dropdown } from "react-bootstrap";


const Register=(props)=>{
	return(
		<div>
		<form onSubmit={props.submithandler}>
		<FormGroup controlId="fname">
			<FormLabel>First name</FormLabel>
			<FormControl
			  	name="fname"
			  	type="text"
				value={props.statedata.fname}	
				onChange={props.changefunct}	
			/>
		  </FormGroup>

		  <FormGroup controlId="lname">
			<FormLabel>Last name</FormLabel>
			<FormControl
			  	name="lname"
			  	type="text"
				value={props.statedata.lname}	
				onChange={props.changefunct}	
			/>
		  </FormGroup>

		  <FormGroup controlId="email">
			<FormLabel>Email</FormLabel>
			<FormControl
			  	name="email"
			  	type="email"
				value={props.statedata.email}	
				onChange={props.changefunct}	
			/>
		  </FormGroup>

		  <FormGroup controlId="gender">
			<FormLabel>Gender</FormLabel>
			<FormGroup onChange={props.changefunct}>
				<Form.Check name="gender" label="Male" type="radio" value="Male" />
				<Form.Check name="gender" label="Female" type="radio" value="Female" />
			</FormGroup>
		  </FormGroup>
		
		  {/* <FormGroup controlId="hobbies">
			<FormLabel>Hobbies</FormLabel>
			<FormGroup onChange={props.changefunct}>
				<Form.Check name="hobbies" label="Cricket" type="checkbox" value="Cricket" />
				<Form.Check name="hobbies" label="Football" type="checkbox" value="Football" />
				<Form.Check name="hobbies" label="Carrom" type="checkbox" value="Carrom" />
			</FormGroup>
		  </FormGroup> */}

			<FormGroup>
				<FormLabel>Education</FormLabel>
				<select onChange={props.changefunct} name="education">
					<option value="" disabled selected>Select Education</option>
					<option value="ssc">SSC</option>
					<option value="hsc">HSC</option>
					<option value="ty">TY</option>
				</select>
			</FormGroup>

		  <FormGroup controlId="password">
			<FormLabel>Password</FormLabel>
			<FormControl
			  	name="password"
			  	type="password"
				value={props.statedata.password}	
				onChange={props.changefunct}	
			/>
		  </FormGroup>
		 
		  <Button type="submit" variant="primary">Login</Button>
		</form>
	  </div>
	)
}

export default Register