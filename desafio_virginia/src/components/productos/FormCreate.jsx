import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Col, Form, FormGroup, Input, Button, Label, Card, CardHeader, CardBody, CardFooter} from 'reactstrap';
import useGenericInput from './../../hooks/useGenericInput';
import {productAsyncAtionCreate} from './../../store/modules/product/product.action';


const FormCreate = (props) => {
    const dispatch = useDispatch();

    const name = useGenericInput('', 'text');
    const description = useGenericInput('', 'text');
    const price = useGenericInput('','number')
    const buttonIsDisabled = () => name.value === '' || description.value === '' || price.value === '';

    const handlerSubmit =(e)=>{
        e.preventDefault();
        let array={"name":name.value,
                    "description":description.value,
                    "price":price.value};
        dispatch(productAsyncAtionCreate(array)); 
        props.history.push('/product');
    }

    return (
        <Container>
            <Card>
                <CardHeader>Creación de usuario</CardHeader>
                <Form onSubmit={handlerSubmit}>
                    <CardBody>
                        <FormGroup row>
                            <Label sm={4}>Nombre</Label>
                            <Col sm={8}>
                                <Input {...name} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={4}>Descripción</Label>
                            <Col sm={8}>
                                <Input sm={8} {...description} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={4}>Precio</Label>
                            <Col sm={8}>
                                <Input sm={8} {...price} />
                            </Col>
                        </FormGroup>
                    </CardBody>
                    <CardFooter className="text-center"><Button color='primary' type='submit' disabled={buttonIsDisabled()}>Crear</Button></CardFooter>
                </Form>
            </Card>
        </Container>

        
    )
}

export default FormCreate;