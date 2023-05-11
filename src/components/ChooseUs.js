import React from "react";
import "./ChooseUs.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BoltIcon from "@mui/icons-material/Bolt";
import CellTowerIcon from "@mui/icons-material/CellTower";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

function ChooseUs() {
  return (
    <div className="choose">
      <h1 className="choose-title">
        WHY <strong>CHOOSE US</strong>
      </h1>

      <div className="choose-container">
        <div className="choose-container-small">
          <div className="choose-box">
            <div className="choose-box-icon">
              <AccountBalanceWalletIcon fontSize="large" />
            </div>
            <div className="choose-box-text">
              <h3>CONNECT YOUR WALLET</h3>
              <p>Use Trust Wallet, Metamask or to connect to the app.</p>
            </div>
          </div>
          <div className="choose-box">
            <div className="choose-box-icon">
              <DesignServicesIcon fontSize="large" />
            </div>
            <div className="choose-box-text">
              <h3>SELECT YOUR QUANTITY</h3>
              <p>Upload your crypto and set a title, description and price.</p>
            </div>
          </div>
          <div className="choose-box">
            <div className="choose-box-icon">
              <BoltIcon fontSize="large" />
            </div>
            <div className="choose-box-text">
              <h3>CONFIRM TRANSACTION</h3>
              <p>Earn by selling your crypto on our marketplace.</p>
            </div>
          </div>
        </div>
        <div className="choose-container-small">
          <img className="choose-imgMain" src="/choose-main.png" />
        </div>
        <div className="choose-container-small">
          <div className="choose-box">
            <div className="choose-box-icon">
              <CellTowerIcon fontSize="large" />
            </div>
            <div className="choose-box-text">
              <h3>RECEIVE YOUR OWN NFTS</h3>
              <p>Invest all your crypto at one place on one platform.</p>
            </div>
          </div>

          <div className="choose-box">
            <div className="choose-box-icon">
              <LibraryAddIcon fontSize="large" />
            </div>
            <div className="choose-box-text">
              <h3>TAKE A MARKET TO SELL</h3>
              <p>
                Discover, collect the right crypto collections to buy or sell.
              </p>
            </div>
          </div>
          <div className="choose-box">
            <div className="choose-box-icon">
              <TravelExploreIcon fontSize="large" />
            </div>
            <div className="choose-box-text">
              <h3>DRIVE YOUR COLLECTION</h3>
              <p>We make it easy to Discover, Invest and manage.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
