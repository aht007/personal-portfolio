import React from "react";
import { SocialData } from "../data/social";
import "./social.css";
function Social() {
    const data = SocialData;
  return (
    <div className="social">
        {data.map ((item) => {
          return (
            <a href={item.link}>
              <div className="social-icon-div">
                <img src={item.icon} className="social-icon"/>
              </div>
            </a>
          );
        })} 
    </div>
  );
}

export default Social;