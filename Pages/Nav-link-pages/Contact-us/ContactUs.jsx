/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Header from "../../../Componnents/Header/Header";
import Footer from "../../../Componnents/Footer/Footer";
import "./contactUs.scss";
import telephone from "../../../Images/Icons/telephone.jpg";
import mobile from "../../../Images/Icons/mobile.png";
import eitaa from "../../../Images/Icons/eitaa.png";

function Main() {
  return (
    <>
      <div className="contactUsOuterContainer">
        <div className="contactUsInnerContainer">
          <main>
            <h1>تماس با ما</h1>
            <li className="contactUsitems">
              <img src={telephone} alt="icon" className="contactUsIcons" />
              03142655248
            </li>
            <li className="contactUsitems">
              <img src={mobile} alt="icon" className="contactUsIcons" />0
            </li>
            <li className="contactUsitems">
              <img src={mobile} alt="icon" className="contactUsIcons" />0
            </li>
            <li className="contactUsitems">
              <img src={eitaa} alt="icon" className="contactUsIcons" />0
            </li>
          </main>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
