import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div id="footer__copyright">
        <p>Copyright © 2023 by Rainbow Ou. All Rights Reserved.</p>
        <div className="socialIconContainer">
        
          <div className="socialIconContainer__socialIcon" >
          <AiFillFacebook className="socialIconContainer__socialIcon--fa" />
          </div>
          <div className="socialIconContainer__socialIcon">
            <AiFillInstagram className="socialIconContainer__socialIcon--ins" />
          </div>
          <div className="socialIconContainer__socialIcon" color="55ACEE">
            <AiFillTwitterSquare className="socialIconContainer__socialIcon--tw" />
          </div>
          <div className="socialIconContainer__socialIcon" color="E60023">
            <FaPinterestSquare className="socialIconContainer__socialIcon--pin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
