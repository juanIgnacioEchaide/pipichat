import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './LoginFormStyle.css';
import Logo from '../../assets/pipiLogo.png';
import ChatScreen from '../ChatScreen/ChatScreen.jsx';

const LoginForm = props => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [withEmail, setEmail] = useState(false)

    const [validEmail, setValidEmail]=useState(false);

    console.log(enteredEmail, enteredPassword)

    const emailHandler = () => {
        if(enteredEmail==''){
            setValidEmail(!validEmail);
        }else{
            setEmail(!withEmail)
            setValidEmail(!validEmail);}
        
    }

    const submitHandler = event => {
        event.preventDefault();
        /*  */
    }
    return (

        <div className="pantalla">
            <img src={Logo} style={{ borderRadius: '50%', height: '30vh' }} alt='' />
            <p className="LogoTitle">PipiChat</p>
            <div className="LoginForm">

                <Form onSubmit={submitHandler}>

                    <Form.Group controlId="formBasicEmail">
                        <div className="rounded text-white w-50"
                            style={{ textAlign: 'justify', marginBottom:10}}>
                                Send a Security Code to your Email and start chating
                        </div>
                        <Form.Control
                         type="email" placeholder="Enter email" value={enteredEmail}
                            onChange={event => { setEnteredEmail(event.target.value) }} />
                        <div style={{ textAlign: 'justify', marginTop:10}}
                            className="rounded text-white w-50">
                            Please keep in mind this security code will expire in 5 minutes
                        </div>
                    </Form.Group>

                    {validEmail===true? <div className="rounded"><p>Please Enter a valid Email</p></div>:<></>}

                    {withEmail === false ? <>
                        <div className="btn" onClick={() => emailHandler()}><p>Send Code</p></div>
                    </> :
                        <>  <Form.Group style={{ textAlign: 'justify' }} controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Insert Security Code" value={enteredPassword}
                                onChange={event => { setEnteredPassword(event.target.value) }} />
                        </Form.Group>

                            <Link to={"/chat"} style={{ textDecoration: 'none' }} >
                                <div className="btn" style={{ display: 'flex', textAlign: 'center', width: '30%' }}><p>Log In</p></div>
                            </Link>

                        </>}
                </Form>
            </div>
        </div>
    );
};

LoginForm.propTypes = {

};

export default LoginForm;