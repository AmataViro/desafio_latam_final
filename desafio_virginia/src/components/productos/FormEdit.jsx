import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Col, Form, FormGroup, Input, Button, Label, Card, CardHeader, CardBody, CardFooter} from 'reactstrap';
import useGenericInput from '../../hooks/useGenericInput';
import {productAsyncAtionUpdate} from '../../store/modules/product/product.action';


const FormEdit = (props) => {
    const valor=props.location.state;
    const id=valor.data.id;
    const name = useGenericInput(valor.data.name, 'text');
    const description = useGenericInput(valor.data.description, 'text');
    const price = useGenericInput(valor.data.price,'number')
    const buttonIsDisabled = () => name.value === '' || description.value === '' || price.value === '';

    const dispatch = useDispatch();
    const handlerSubmit =(e)=>{
        e.preventDefault();
        let array={"id":id,
                    "name":name.value,
                    "description":description.value,
                    "price":price.value};
        dispatch(productAsyncAtionUpdate(array)); 
        props.history.push('/product');
    }

    return (
        <Container>
            <Card>
                <CardHeader>Editar de usuario</CardHeader>
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

export default FormEdit;