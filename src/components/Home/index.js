import React from "react";
import { Col, Container, Row } from 'reactstrap'
import SocialContact from "../Social";

function Home() {
    return (
        <Container >
            <div className="home-top">
                <div className="home-info">
                    Hello There ✋,I am
                    <br /> <span className="info-name">Mohammad Ahtasham Ul Hassan</span>.
                    <br />

                    <Row>
                        <Col xs="6" sm="6" md="6">
                        Currently a Software Engineer at edX/Arbisoft (since July 2021). 
                        Graduated Punjab University College of Information Technology with a Software Engineering Degree in 2021 (3.7 CGPA), and interned at Datalatics.
                        </Col>
                    </Row>
                </div>
                <div className="home-photo">
                    <img
                        src={require("../../assets/main.jpg")}
                        className="picture"
                        alt="ahtasham"
                    />
                </div>
            </div>
            <br />
            <SocialContact />
        </Container>
    );
}

export default Home;