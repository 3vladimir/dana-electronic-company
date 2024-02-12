/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import SignInForm from "./Form/SignInForm";

function Main() { 
  const managersInformationsDatabase = window.localStorage.getItem(
    "managersInformationsDatabase"
  );
  const list = JSON.parse(managersInformationsDatabase);
  return (
    <>
      <SignInForm
        title={"بخش مدیران"}
        nextPageAddress={"/managers-page"}
        validUsersList={list}
        userType={'مدیر'}
      />
    </>
  );
}

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
