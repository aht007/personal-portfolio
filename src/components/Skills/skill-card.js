import React from "react";
import "./skill-card.css";
import { Col } from 'reactstrap'
function SkillCard({ skill }) {
  return (
   <Col sm="6" md="3">
     <div className="skill-icon">{skill.icon}</div>
     <label className="skill-name">{skill.name}</label>
   </Col>
  );
}
export default SkillCard;