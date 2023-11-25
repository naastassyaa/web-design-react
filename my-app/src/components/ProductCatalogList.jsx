import React from 'react';
import { Container, Row, Spinner, Alert } from 'react-bootstrap';
import ProductCatalogCard from './ProductCatalogCard';

function ProductCatalogList({ data, loading, error }) {
    if (loading) {
        return (
            <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Row className="justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
            </Container>
        );
    }

    if (error) {
        return (
            <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Row className="justify-content-center">
                    <Alert variant="danger">
                        Error fetching data. Please try again later.
                    </Alert>
                </Row>
            </Container>
        );
    }

    if (data.length === 0) {
        return (
            <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Row className="justify-content-center">
                    <p>Nothing was found for your search :(</p>
                </Row>
            </Container>
        );
    }

    return (
        <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
            <Row>
                {data.map((product) => (
                    <ProductCatalogCard
                        key={product.id}
                        id={product.id}
                        imageSrc={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default ProductCatalogList;
