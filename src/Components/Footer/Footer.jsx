import React from "react";
import "./Footer.css";
import Pratham from "../../assets/pratham.jpg";
import { IoSettingsOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";

function Footer({ userInput, handleUserInput, handleSendMessage }) {
  return (
    <div className="chatbot-footer">
      <div className="input-wrapper">
        <img src={Pratham} alt="Error in loading..." />
        <input type="text" placeholder="Your question" />
      </div>
      <div className="footer-container">
        <div className="context">
          <label htmlFor="context">Context</label>
          <select>
            <option>OnBoarding</option>
            <option>None</option>
          </select>
        </div>
        <div className="footer-icons">
          <IoSettingsOutline />
          <VscSend />
        </div>
      </div>
    </div>
  );
}

export default Footer;
