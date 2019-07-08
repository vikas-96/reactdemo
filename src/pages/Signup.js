import React from 'react';
import Register from '../component/Register';

class Signup extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
          fname: "",
          lname: "",
          email: "",
          gender: "",
          education:"",
          // hobbies: [],
          password: "",
        };
      }

      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      addform = event => {
        console.log(this.state);
        event.preventDefault();
      }

	render(){
		return(
      <React.Fragment>
        <Register statedata={this.state} changefunct={this.handleChange} submithandler={this.addform} />
      </React.Fragment>
      
		)
	}
}

export default Signup;