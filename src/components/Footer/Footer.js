import './Footer.css';
import React from "react";
import FooterLogo from "../../assets/Logos/hthlogo_banner_ver.svg";
import 'boxicons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Footer() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 7,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    }
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
            <a href="https://www.facebook.com/canadascapitalhackathon" target="_blank">
              <box-icon color='#3B4779' animation='tada-hover' type="logo" name="facebook-square"/>
            </a>
            <a href="https://twitter.com/hackthehiII" target="_blank">
              <box-icon color='#3B4779' animation='tada-hover' name="twitter" type="logo" />
            </a>
            <a href="https://www.instagram.com/hackthehill/" target="_blank">
              <box-icon color='#3B4779' animation='tada-hover' name="instagram" type="logo" />
            </a>
            <a href="https://www.tiktok.com/@hackthehill" target="_blank">
              <box-icon color='#3B4779' animation='tada-hover' name="tiktok" type="logo" />
            </a>
            <a href="https://www.linkedin.com/company/hackthehill/" target="_blank">
              <box-icon color='#3B4779' animation='tada-hover' name='linkedin' type='logo' ></box-icon>
            </a>
            <a href="https://www.medium.com/@hackthehill" target="_blank">
              <box-icon color='#3B4779' animation='tada-hover' name='medium' type='logo' ></box-icon>
            </a>
          </div>
        </div>
      </div>
      <div className="carslide">
        <Carousel
          responsive={responsive}
          arrows={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          transitionDuration={50}
          autoPlay={true}
          autoPlaySpeed={2000}
          centerMode={true}
        >
          <div>
            <box-icon color='#3B4779' animation='tada-hover' 
            name="user-circle" type="regular" size="md"/>
          </div>
          <div>
            <box-icon color='#3B4779' animation='tada-hover' 
            name="user-circle" type="regular" size="md"/>
          </div><div>
            <box-icon color='#3B4779' animation='tada-hover' 
            name="user-circle" type="regular" size="md"/>
          </div><div>
            <box-icon color='#3B4779' animation='tada-hover' 
            name="user-circle" type="regular" size="md"/>
          </div><div>
            <box-icon color='#3B4779' animation='tada-hover' 
            name="user-circle" type="regular" size="md"/>
          </div><div>
            <box-icon color='#3B4779' animation='tada-hover' 
            name="user-circle" type="regular" size="md"/>
          </div><div>
            <box-icon color='#3B4779' animation='tada-hover' 
            name="user-circle" type="regular" size="md"/>
          </div><div>
            <box-icon color='#3B4779' animation='tada-hover' 
            name="user-circle" type="regular" size="md"/>
          </div><div>
            <box-icon color='#3B4779' animation='tada-hover' 
            name="user-circle" type="regular" size="md"/>
          </div><div>
            <box-icon color='#3B4779' animation='tada-hover' 
            name="user-circle" type="regular" size="md"/>
          </div><div>
            <box-icon color='#3B4779' animation='tada-hover' 
            name="user-circle" type="regular" size="md"/>
          </div><div>
            <box-icon color='#3B4779' animation='tada-hover' 
            name="user-circle" type="regular" size="md"/>
          </div>
        </Carousel>
      </div> <br/>
    </div>
  );
}

export default Footer;