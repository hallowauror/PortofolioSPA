import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cewek from '../assets/cewek.jpg';

const Styles = styled.div`
    .jumbotron {
        background: url(${cewek}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position:   ;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity:0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div classname="overlay"></div>
            <Container>
                <h1>Selamat Datang</h1>
                <p>Ini merupakan Tugas</p>
            </Container>
        </Jumbo>
    </Styles>
)