
import React from 'react';
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div`
height: ${typeof window !== "undefined" ? window.innerWidth : 500}px;
justify-content:center;
display:flex;
padding: 10%;
.spinner-grow {
    margin: 7px;
}
`

const LoadingSpinner = () => {
    return (
        <Container>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="primary" />
        </Container>
    )
}

export default LoadingSpinner