import React from "react";
import { Container, Row, Label } from 'reactstrap'

import "./skills.css";
import { SkillsData } from "../data/skills";
import SkillCard from "./skill-card";
import Separator from "../Shared/separator";

function Skills() {
    const data = SkillsData;
    return (
        <div className="skills">
            <label className="section-title">Skills</label>
            <Separator />
            <Container style={{ textAlign: "center" }}>
                {data.map((item) => {
                    return (
                        <>
                            <Label className="skills-section-title">{item.type}</Label>
                            <br />
                            <br />
                            <Row >

                                <>
                                    {item.list.map((skill) => {
                                        return <SkillCard skill={skill} />;
                                    })}
                                </>
                            </Row>
                            <br />
                        </>
                    );
                })}
            </Container>
        </div>
    );
}

export default Skills;