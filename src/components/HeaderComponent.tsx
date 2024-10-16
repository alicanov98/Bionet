import React from "react";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import Logo from "../assets/images/bionetLogoFooter.png";
import LogoTwo from "../assets/images/bionetLogo.png";
import { IoSearch } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const HeaderComponent = () => {
  const location = useLocation();

  const getHeaderStyleAndLogo = () => {
    switch (location.pathname) {
      case "/":
        return {
          logo: Logo,
          style: {
            background: "linear-gradient(90deg, #587abc 9%, #01c3cd 86%)",
          },
          color: "#fff",
        };
      default:
        return {
          logo: LogoTwo,
          style: { backgroundColor: "#fff" },
          color: "#000",
        };
    }
  };

  const { logo, style, color } = getHeaderStyleAndLogo();

  return (
    <header className="header">
      <div className="headerTop">
        <div className="container">
          <div className="row">
            <div className="headerTopContext">
              <a
                href="mailto:mdhthesenzade@gmail.com"
                target="_blank"
                style={{ color: "#fff", textDecoration: "none" }}
                rel="noreferrer"
              >
                <MdEmail size={24} color="#fff" />
                mdhthesenzade@gmail.com
              </a>
              <a
                href="https://www.google.com/maps?q=Nərimanov+rayonu"
                target="_blank"
                style={{ color: "#fff", textDecoration: "none" }}
                rel="noreferrer"
              >
                <MdLocationPin size={24} color="#fff" />
                Nərimanov rayonu
              </a>
              <a
                href="tel:+994550000000"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <BsTelephoneFill size={24} color="#fff" />
                055 000 00 00
              </a>
            </div>
            <div className="headerTopContext">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={24} color="#fff" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} color="#fff" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} color="#fff" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="headerBottom" style={{ ...style }}>
        <div className="container">
          <div className="row">
            <a className="logo" href="./">
              <img src={logo} alt="Bionet Logo" />
            </a>
            <ul className="navList">
              <li className="navItem" style={{ margin: "10px 0" }}>
                <a className="navLinkItem" href="./" style={{ color: color }}>
                  Home
                </a>
              </li>
              <li className="navItem" style={{ margin: "10px 0" }}>
                <a
                  className="navLinkItem"
                  href="./ProjectsPage"
                  style={{ color: color }}
                >
                  Projects
                </a>
              </li>
              <li className="navItem" style={{ margin: "10px 0" }}>
                <a
                  className="navLinkItem"
                  href="./servicesPage"
                  style={{ color: color }}
                >
                  Services
                </a>
              </li>
              <li className="navItem" style={{ margin: "10px 0" }}>
                <a
                  className="navLinkItem"
                  href="./aboutPage"
                  style={{ color: color }}
                >
                  About
                </a>
              </li>
              <li className="navItem" style={{ margin: "10px 0" }}>
                <a
                  className="navLinkItem"
                  href="./contactsPage"
                  style={{ color: color }}
                >
                  Contacts
                </a>
              </li>
            </ul>
            <div className="navLeft">
              <IoSearch size={24} color={color} />
              <a className="navLinkItem" style={{ color: color }} href="./">
                En
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
