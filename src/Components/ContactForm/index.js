import React from 'react';
import styled, { withTheme } from "styled-components";
import { Formik, Form, Field, ErrorMessage  } from 'formik';

const SubmitButton = styled.button`
    height: 44px;
    background-color: rgb(${props => props.theme.link});
    color: rgb(${props => props.theme.background}) !important;
    padding: 11px 15px 13px 15px;
    border: 0;
    display: block;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    font-family: 'HKGrotesk', Roboto, sans-serif;
    font-weight: 700;
    border-radius: 4px;

    :hover {
        color: rgb(${props => props.theme.background}) !important;
        filter: brightness(120%);
    }

    :focus {
        outline: 0;
    }

    :disabled {
        filter: grayscale(100%);
    }
`

const StyledField = styled(Field)`
    display: flex;
    width: 100%;
    height: 44px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    -webkit-appearance: none;
    margin: 5px 0;
    color: rgb(${props => props.theme.foreground});
    background-color: rgba(${props => props.theme.foreground}, 0.05);

`


const InputLabel = styled.p`
    margin: 25px 0 5px 0;
`

const StyledInputArea = styled(Field)`
    margin: 5px 0 20px 0;
    padding: 10px;
    display: flex;
    width: 100%;
    border-radius: 5px;
    border: none;
    -webkit-appearance: none;
    color: rgb(${props => props.theme.foreground});
    background-color: rgba(${props => props.theme.foreground}, 0.05);
`

const StyledErrorMessage = styled(ErrorMessage)`
    color: red;
    font-size: 12px;
`

const Wrapper = styled.div`
margin-bottom: 100px
`

class ContactForm extends React.Component {
  
    render() {
        var success = false;
        return (
            <Wrapper>
                <h2> I'll reply soon!</h2>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        let errors = {};
                        if (!values.email) {
                        errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, setStatus }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
						setStatus({ success: true });
                        }, 400);
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form name="contact" method="post">
                        <input type="hidden" name="form-name" value="contact" />
                            <InputLabel>Name</InputLabel>
                            <StyledField type="text" name="realname"  placeholder="Bill Gates"/>
                            <InputLabel>Email</InputLabel>
                            <StyledField type="email" name="email" placeholder="bill@gates.com"/>
                            <StyledErrorMessage name="email" component="div" />
                            <InputLabel>Message</InputLabel>
                            <StyledInputArea component="textarea" rows="5" type="text" name="message" />
                            <SubmitButton type="submit" disabled={isSubmitting}>
                            Send message
                            </SubmitButton>
                            { (success === true) && 
                                <div>
                                    Stuff Here
                                </div>
                            }
                        </Form>
                    )}
                </Formik>
            </Wrapper>
        );
    }
}

export default withTheme(ContactForm);