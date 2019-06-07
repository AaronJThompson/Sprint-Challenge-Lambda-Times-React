import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';

export default function Login(props) {
    let { updateAuth, showLogin } = props;
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    let usernameHandler = (event) => {
        setUsername(event.target.value);
    }
    
    let passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    let login = (event) => {
        event.preventDefault();
        if (!username || !password)
            return;
        let user = JSON.stringify({
            username: username,
        })
        localStorage.setItem('user', user);
        updateAuth();
    }

    return (
        <div className="login">
            <Modal isOpen={showLogin}>
                <ModalHeader>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={login}>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={usernameHandler}
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={passwordHandler}
                        />
                        <Input
                            type="submit"
                            value="Login"
                        />
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}