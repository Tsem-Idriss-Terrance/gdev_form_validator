import React, {useContext, useState} from "react";
import logo from "/logo.svg";
import miniLogo from "/miniLogo.png";
import "../style/Header.css";
import AppContext from "../context/AppContext";
import {gdev_home_page} from "../config";
//import downloadFile from "../utils/DownloadFile";
export const Header = () => {
  const [activeNav, setActiveNav] = useState("");
  const {setActiveNav: setActiveSideBar} = useContext(AppContext);
  return (
    <div
      className={`border-b-1  d-flex flex-row align-items-center justify-content-between  py-2 position-sticky top-0 mb-3 gap-5 mobile-px-4 ipad-px-4 tablet-px-4 laptop-px-4 desktop-px-4`}
      style={{backgroundColor: "#0D1119", zIndex: "1"}}
    >
      <i
        className="bi bi-list ipad-d-block mobile-d-block tablet-d-none laptop-d-none desktop-d-none text-light gt-15 cursor-ptr"
        onClick={() => {
          setActiveSideBar("active_sidebar");
        }}
      ></i>
      <span>
        <a href={gdev_home_page} target="_blank" rel="noopener noreferrer">
          <img
            src={logo}
            alt="Gdev"
            style={{height: "60px"}}
            className="mobile-d-none ipad-d-none"
          />
        </a>
        <a href={gdev_home_page} target="_blank" rel="noopener noreferrer">
          <img
            src={miniLogo}
            alt="Gdev"
            style={{height: "50px"}}
            className="tablet-d-none laptop-d-none desktop-d-none"
          />
        </a>
      </span>

      <div className={`ipad-d-none mobile-d-none ${activeNav}`}>
        <div className="d-flex align-items-center gap-5 justify-content-end ipad-d-none">
          <button
            className="btn btn-primary"
            onClick={() => {
              downloadFile(
                `/gdev_form_validator.js`,
                "gdev_form_validator"
              );
            }}
          >
            Download
          </button>
          <div className="d-flex flex-row align-items-center cursor-ptr width-fit-content px-3 border-l-1 br-1 border-t-1 border-color-jira">
            <i className="bi bi-play gt-10 text-light"></i>
            <span className="text-light">Demo</span>
          </div>
          <a
            href="https://github.com/GlyphDev-com/Gdev-Form-Validator"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>
          <span className="text-light">FAQs</span>

          <span className="text-light"> v2.0.0 </span>
          <div className="tablet-d-none laptop-d-none desktop-d-none w-100 px-3">
            <i
              className="bi bi-x-lg gt-10 text-light px-1 border-b-1 border-l-2 border-color-jira rounded-circle cursor-ptr"
              onClick={() => {
                setActiveNav("");
              }}
            ></i>
          </div>
        </div>
      </div>

      <span className="tablet-d-none laptop-d-none desktop-d-none">
        <i className="bi bi-play gt-15 text-light mx-2"></i>

        <i
          className="bi bi-three-dots-vertical gt-15  text-light cursor-ptr"
          onClick={() => {
            setActiveNav("active_nav");
          }}
        ></i>
      </span>
    </div>
  );
};

export default Header;
