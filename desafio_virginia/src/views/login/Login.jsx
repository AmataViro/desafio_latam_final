import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Form, FormGroup, Label, Card, Container, Col, Row, CardHeader, CardBody } from 'reactstrap';
import useGenericInput from '../../hooks/useGenericInput';
import { loginActionsAsyncCreator as loginAction } from './../../store/modules/auth/login.action';

const Login = (props) => {
    const dispatch = useDispatch();

    const jwt = useSelector(store => store.auth.auth.data);
    console.log(JSON.stringify(jwt));


    const email = useGenericInput('', 'email');
    const password = useGenericInput('', 'password');

    const buttonIsDisabled = () => password.value === '' || email.value === '';

    useEffect(() => {
        if (jwt !== null) {
            props.history.push('dashboard/welcome')
        }
    }, [jwt])

    return (
        <Container className="mt-4">
            <Row>
                <Col sm={{ size: 4, offset: 4}}>
                    <Card>
                        <CardHeader className={'card text-white bg-info mb-3'}>Inicio de sesión</CardHeader>
                        <CardBody>
                            <Form>
                                <pre className="text-left">
                                </pre>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input {...email} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contraseña</Label>
                                    <Input {...password} />
                                </FormGroup>
                                <Button
                                    variant="primary"
                                    disabled={buttonIsDisabled()}
                                    onClick={() => dispatch(loginAction(email.value, password.value))}
                                >Iniciar Sesión</Button>
                            </Form></CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default Login;