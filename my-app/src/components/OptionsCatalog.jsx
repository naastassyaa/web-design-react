import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Search from "./Search";
import Filter from "./Filter";
import ApplyButton from "./ApplyButton";

const OptionsCatalog = () => {
    return (
        <Container fluid style={{marginTop:"30px"}}>
            <Row>
                <Col md={6} style={{display: "flex", justifyContent: "center", gap:"40px"}}>
                    <Filter name={"Size"} choices={["S", "M", "L", "XL"]}/>
                    <Filter name={"Color"} choices={["Black", "White", "Grey", "Colored"]}/>
                    <Filter name={"Size"} choices={[1, 2, 3, 4]}/>
                </Col>
                <Col md={3} style={{display: "flex", justifyContent: "left"}}>
                    <ApplyButton/>
                </Col>
                <Col md={3} style={{display: "flex", justifyContent: "center"}}>
                    <Search/>
                </Col>
            </Row>
        </Container>
    );
};

export default OptionsCatalog;
