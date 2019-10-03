import React from 'react';
import {Container} from 'reactstrap';
import Jumbotron from '../../components/jumbotron-project/Jumbotron-project';
const Welcome = (props) => {
    return (
        <div className="user-list-view">
            <Container>
            <Jumbotron />
            </Container>
        </div>
    );
};

export default Welcome;