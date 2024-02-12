/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Header from "../../../Componnents/Header/Header";
import Footer from "../../../Componnents/Footer/Footer";

function Main() {
  return (
    <>
      <div style={{padding:'100px 0 500px 0',textAlign:'center'}}>
        <h1>
            بخش تجهزیات و قطعات
        </h1>
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
