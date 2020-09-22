import React, {Component, Fragment} from 'react';
import Paper from "../components/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "../components/FormGroup";

const initState = {
  firstName: { value: "", hasError: false},
  lastName: { value: "", hasError: false},
  phone: { value: "", hasError: false},
  email: { value: "", hasError: false},
  message: { value: "", hasError: false},
};

class ContactForm extends Component{
  constructor(props, context) {
    super(props, context);

    this.state = initState;
  }

  handleOnFirstNameChanged = (value) => { this.setState({firstName: { value: value, hasError: false}})}
  handleOnLastNameChanged = (value) => { this.setState({lastName: { value: value, hasError: false}})}
  handleOnPhoneChanged = (value) => { this.setState({phone: { value: value, hasError: false}})}
  handleOnEmailChanged = (value) => { this.setState({email: { value: value, hasError: false}})}
  handleOnMessageChanged = (value) => { this.setState({message: { value: value, hasError: false}})}

  handleSubmit = () => {
    var overallStatus = [];

    var firstName = this.state.firstName;
    if(firstName.value === ""){
      firstName.hasError = true;
      overallStatus.push(false);
    } else {
      firstName.hasError = false;
    }

    var lastName = this.state.lastName;
    if(lastName.value === ""){
      lastName.hasError = true;
      overallStatus.push(false);
    } else {
      lastName.hasError = false;
    }

    var phone = this.state.phone;
    if(phone.value === ""){
      phone.hasError = true;
      overallStatus.push(false);
    } else {
      phone.hasError = false;
    }

    var email = this.state.email;
    if(email.value === ""){
      email.hasError = true;
      overallStatus.push(false);
    } else {
      email.hasError = false;
    }

    var message = this.state.message;
    if(message.value === ""){
      message.hasError = true;
      overallStatus.push(false);
    } else {
      message.hasError = false;
    }

    if(overallStatus.length === 0){
      this.setState(initState)
    } else {
      this.setState({firstName: firstName, lastName: lastName, phone: phone, email: email, message: message})
    }
  }

  render() {
    return (
        <Paper>
          <FormGroup row>
          <FormGroup>
            <FormGroup row>
            <FormControl variant={"outlined"} error={this.state.firstName.hasError} style={{width: "50%"}}>
              <TextField
                label="firstName"
                name="firstName"
                type="text"
                value={this.state.firstName.value}
                variant="outlined"
                onChange={event => this.handleOnFirstNameChanged(event.target.value)}
              />
              {this.state.firstName.hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>
            <FormControl variant={"outlined"} error={this.state.lastName.hasError} style={{width: "50%"}}>
              <TextField
                label="lastName"
                name="lastName"
                type="text"
                value={this.state.lastName.value}
                variant="outlined"
                onChange={event => this.handleOnLastNameChanged(event.target.value)}
              />
              {this.state.lastName.hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>
            </FormGroup>
            <FormControl variant={"outlined"} error={this.state.phone.hasError}>
              <TextField
                label="phone"
                name="phone"
                type="text"
                value={this.state.phone.value}
                variant="outlined"
                onChange={event => this.handleOnPhoneChanged(event.target.value)}
              />
              {this.state.phone.hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>
            <FormControl variant={"outlined"} error={this.state.email.hasError}>
              <TextField
                label="email"
                name="email"
                type="text"
                value={this.state.email.value}
                variant="outlined"
                onChange={event => this.handleOnEmailChanged(event.target.value)}
              />
              {this.state.email.hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>

            <FormControl variant={"outlined"} error={this.state.message.hasError} >
              <TextField
                  label="message"
                  name="message"
                  type="text"
                  multiline
                  rows={4}
                  value={this.state.message.value}
                  variant="outlined"
                  onChange={event => this.handleOnMessageChanged(event.target.value)}
              />
              {this.state.message.hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>
            <Button variant="outlined" color="primary" style={{margin: "8px", width: "100%"}} onClick={this.handleSubmit}>Submit</Button>
          </FormGroup>
          </FormGroup>
        </Paper>
    );
  }

}

export default ContactForm;
