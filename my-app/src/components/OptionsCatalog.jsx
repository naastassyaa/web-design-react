import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Search from "./Search";
import Filter from "./Filter";
import ApplyButton from "./ApplyButton";
import {getAllColors, getAllSizes} from "../reguests/products";


const OptionsCatalog = ({data, setData}) => {
    const [size, setSize] = useState(0)
    const [color, setColor] = useState(0)

    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    useEffect(() => {
        getAllColors()
            .then((colors) => {
                setColors(colors);
            })
            .catch((error) => {
                console.log(error)
            });
        getAllSizes()
            .then((sizes) => {
                setSizes(sizes);
            })
            .catch((error) => {
                console.log(error)
            });

    }, []);
    return (
        <Container fluid style={{marginTop:"30px"}}>
            <Row>
                <Col md={6} style={{display: "flex", justifyContent: "center", gap:"40px"}}>
                    <Filter name={"Size"} choices={sizes} state={size} setState={setSize}/>
                    <Filter name={"Color"} choices={colors} state={color} setState={setColor}/>
                </Col>
                <Col md={3} style={{display: "flex", justifyContent: "left"}}>
                    <ApplyButton setData={setData} states={[color, size]}/>
                </Col>
                <Col md={3} style={{display: "flex", justifyContent: "center"}}>
                    <Search setData={setData} data={data}/>
                </Col>
            </Row>
        </Container>
    );
};

export default OptionsCatalog;
