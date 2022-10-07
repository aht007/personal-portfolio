import React from "react";
import "./home.css";
import SocialContact from "../Social";
function Home() {
  return (
    <div className="home" style={{padding:"12px",paddingBottom:"36px"}}>
      <div className="home-top">
        <div className="home-info">
          Hello There ✋,I am
         <br /> <span className="info-name">Mohammad Ahtasham Ul Hassan</span>.
         <br /> I have a strong passion for building Web application.
        </div>
        <div className="home-photo">
          <img 
            src={require("../../assets/main.jpg")}
            className="picture"
            alt="ahtasham"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default Home;