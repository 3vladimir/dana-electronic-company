/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import "./HomePage.scss";
import Header from "../../Componnents/Header/Header";
import Footer from "../../Componnents/Footer/Footer";
import bannerLogo from "../../Images/bannerLogo.png";
import { Link } from "react-router-dom";
import { handleLocalStoarege } from "./Local-storage/HandleLocalStorage";

function Main() {
  handleLocalStoarege();

  return (
    <>
      <div className="mainOuterContainer">
        <div className="banner">
          <img className="bannerLogo" src={bannerLogo} alt="bannerLogo" />
        </div>
        <div className="mainInnerContainer">
          <main>
            <div className="mainBoxesOuterContainer">
              <Link className="mainBoxes" to={"/articles"}>
                <h3 className="mainBoxesTitles">مقالات</h3>
              </Link>
              <Link className="mainBoxes" to={"/catalogues"}>
                <h3 className="mainBoxesTitles">کاتالوگ ها</h3>
              </Link>
            </div>
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
