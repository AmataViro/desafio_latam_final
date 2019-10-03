import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Table, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { productAsyncAction, productAsyncAtionDelete} from './../../store/modules/product/product.action';
import {Spinner} from 'reactstrap';
import { Link } from "react-router-dom";
import { FaPlusCircle, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const Home = (props) => {
const dispatch = useDispatch();

const handleDelete = (e) => {
  return () => {
    dispatch(productAsyncAtionDelete(e)); 
    props.history.push('/dashboard/product');
  }
    
}
    
  useEffect(() => { 
    dispatch(productAsyncAction());
  }, [dispatch]);

  const data = useSelector( datos => datos.producto.getAll.data);
    return (
      <Container>
            <Card>
          <CardHeader className="text-right">
            <Link to="/dashboard/createproduct"> <Button style={{ color: 'white' }} color="info"> Agregar Producto <FaPlusCircle /> </Button> </Link>
          </CardHeader>
          <CardBody>
            
          { data ? <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th />
                  <th />
                </tr>
              </thead>            
              <tbody>
                {data.map((e) => (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.description}</td>
                    <td>{e.price}</td>
                    <td><Link to={{
                          pathname: '/dashboard/updateproduct', state: {
                          data: e
                          }
                        }}>
                          <Button color="primary">Modificar <FaPencilAlt/></Button> 
                          </Link>
                    </td>
                    <td><Button color='danger' onClick={handleDelete(e)}>Eliminar <FaTrashAlt /></Button></td>
                  </tr>
                      
                      
                  ))}
                  </tbody>
                  
           
            
            </Table>: <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                  }

            </CardBody>
        </Card>
        </Container>
        
        
    )
};

export default Home;