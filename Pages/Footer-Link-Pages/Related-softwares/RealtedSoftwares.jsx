/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Header from "../../../Componnents/Header/Header";
import Footer from "../../../Componnents/Footer/Footer";
import Title  from '../../../Componnents/Title/Title' 


function Main() {
  return (
    <>
      <div style={{padding:'100px 0 500px 0',textAlign:'center'}}>
        <h1>
            بخش نرم افزار های مرتبط
        </h1>
      </div>
    </>
  );
}

function App() {
  return (
    <>
    <Title>
      نرم افزار های مرتبط
    </Title>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
