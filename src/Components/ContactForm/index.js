import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import Input from '../Input';

const SubmitButton = styled.input`
    height: 44px;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.link} !important;
    filter: brightness(120%);
    padding: 12px 15px;
    border: 0;
    display: block;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    font-family: 'HKGrotesk', Roboto, sans-serif;
    font-weight: 700;
    border-radius: 4px;
    box-shadow: 2px 2px 0px 0px ${props => props.theme.link};

    :hover {
        color: ${props => props.theme.link} !important;
        margin: -1px 1px 0 0;
        box-shadow: 5px 5px 0px 0px ${props => props.theme.link};
    }

    :focus {
        outline: 0;
    }
`


const InputLabel = styled.p`
    margin: 5px 0;
`

const InputArea = styled.textarea`
    margin: 5px 0 20px 0;
    padding: 10px;
    display: flex;
    width: 100%;
    border-radius: 5px;
    border: none;
    -webkit-appearance: none;
`

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            realname: '',
            email: '',
            message: ''
        };
  
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        return (
                <form className="d-flex flex-column" onSubmit={this.handleSubmit}>
                    <label>
                        <InputLabel>Name</InputLabel>
                        <Input type="text" name="realname" onChange={this.handleChange} />
                        <InputLabel>Email</InputLabel>
                        <Input type="email" name="email" onChange={this.handleChange} />
                        <InputLabel>Message</InputLabel>
                        <InputArea rows="5"type="text"  name="message" onChange={this.handleChange} />
                    </label>
                    <SubmitButton type="submit" value="Submit"/>
                </form>
        );
    }
}

export default withTheme(ContactForm);