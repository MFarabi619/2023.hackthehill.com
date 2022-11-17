import "./Footer.css";
import React from "react";
import { useState } from "react";
import FooterLogo from "../../assets/Logos/hthlogo_banner_ver.svg";
import "boxicons";
import { TextField, Button } from "@mui/material";

function Footer() {
  const [formInput, setFormInput] = useState("");
  const [clicked, setClicked] = useState(false);

  const HandleChange = (e) => {
    setFormInput(e.target.value);
  };

  const HandleKeyPress = (e) => {
    if (e.key == "Enter" && !clicked) {
      setClicked(true);
      console.log(formInput);
      setFormInput("");
    }
  };

  const HandleButtonClick = (e) => {
    setClicked(true);
    console.log(formInput);
    setFormInput("");
  };

  return (
    <div className="Footer">
      <div className="FooterBody">
        <div className="FooterLogo">
          <img src={FooterLogo} alt="Logo" />
        </div>
        <div className="LogoText">
          <p>Canada's Capital Hackathon.</p>
        </div>
        <div class="FooterContainer">
          <div className="MediaLinks">
            <a
              href="https://www.facebook.com/canadascapitalhackathon"
              target="_blank"
            >
              <box-icon
                color="#3B4779"
                animation="tada-hover"
                type="logo"
                name="facebook-square"
              />
            </a>
            <a href="https://twitter.com/hackthehiII" target="_blank">
              <box-icon
                color="#3B4779"
                animation="tada-hover"
                name="twitter"
                type="logo"
              />
            </a>
            <a href="https://www.instagram.com/hackthehill/" target="_blank">
              <box-icon
                color="#3B4779"
                animation="tada-hover"
                name="instagram"
                type="logo"
              />
            </a>
            <a href="https://www.tiktok.com/@hackthehill" target="_blank">
              <box-icon
                color="#3B4779"
                animation="tada-hover"
                name="tiktok"
                type="logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/hackthehill/"
              target="_blank"
            >
              <box-icon
                color="#3B4779"
                animation="tada-hover"
                name="linkedin"
                type="logo"
              ></box-icon>
            </a>
            <a href="https://www.medium.com/@hackthehill" target="_blank">
              <box-icon
                color="#3B4779"
                animation="tada-hover"
                name="medium"
                type="logo"
              ></box-icon>
            </a>
          </div>
          <div className="FooterEmailDetails">
            Stay connected with our newsletter!
          </div>

          <div className="FooterEmail">
            {clicked ? (
              <TextField
                sx={{
                  mr: "15px",
                }}
                size="small"
                id="outlined-basic"
                variant="outlined"
                value="Success!"
                disabled
              />
            ) : (
              <TextField
                sx={{
                  mr: "15px",
                }}
                size="small"
                id="outlined-basic"
                label="Enter email here"
                variant="outlined"
                value={formInput}
                onChange={HandleChange}
                onKeyDown={HandleKeyPress}
              />
            )}
            {clicked ? (
              <Button
                variant="outlined"
                startIcon={<box-icon name="send" type="solid" color="grey" />}
                disabled
              />
            ) : (
              <Button
                variant="outlined"
                size="small"
                startIcon={
                  <box-icon name="send" type="solid" color="#3B4779" />
                }
                onClick={HandleButtonClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
