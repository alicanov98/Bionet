import React from "react";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import Logo from "../assets/images/bionetLogo.png";
import { IoSearch } from "react-icons/io5";

const HeaderComponent = () => {
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
      <div className="headerBottom">
        <div className="container">
          <div className="row">
            <div className="logo">
              <img src={Logo} alt="Bionet Logo" />
            </div>
            <ul className="navList">
              <li className="navItem" style={{ margin: "10px 0" }}>
                <a className="navLinkItem" style={{ color: "black" }} href="./">
                  Projects
                </a>
              </li>
              <li className="navItem" style={{ margin: "10px 0" }}>
                <a className="navLinkItem" style={{ color: "black" }} href="./">
                  Services
                </a>
              </li>
              <li className="navItem" style={{ margin: "10px 0" }}>
                <a className="navLinkItem" style={{ color: "black" }} href="./">
                  About
                </a>
              </li>
              <li className="navItem" style={{ margin: "10px 0" }}>
                <a className="navLinkItem" style={{ color: "black" }} href="./">
                  Contacts
                </a>
              </li>
            </ul>
            <div className="navLeft">
              <IoSearch size={24} color="black" />
              <a className="navLinkItem" style={{ color: "black" }} href="./">
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
