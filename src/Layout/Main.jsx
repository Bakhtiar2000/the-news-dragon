import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';

import Footer from '../Pages/Shared/Footer/Footer';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>

                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col lg={6}>
                        <Outlet></Outlet> {/* রাউট অনুসারে কোন কিছু চেঞ্জ হইলে সেটা <outlet> এর মধ্যে থাকে */}
                    </Col>
                    
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;