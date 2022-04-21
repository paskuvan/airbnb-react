import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import logo from "../images/airbnbRed.png";
import { ConnectButton } from "web3uikit";

const Rentals = () => {
  const {state: searchFilters} = useLocation();
  return (
    <>
     <div  className="topBanner">
        <Link to="/">
          <img className="logo" src={logo} alt="logo"></img>
        </Link>
        <div className="searchReminder">

          <div className="filter">
          {searchFilters.destination}
          </div>
          <div className="vl" />
          <div className="filter"></div>
          <div className="vl" />
          <div className="filter"></div>
          <div className="vl" />
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Rentals;
