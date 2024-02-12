/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import SignInForm from "./Form/SignInForm";

function Main() {
  const agentsInformationsDatabase = window.localStorage.getItem(
    "agentsInformationsDatabase"
  );
  const list = JSON.parse(agentsInformationsDatabase);

  return (
    <>
      <SignInForm
        title={"بخش نمایندگان"}
        nextPageAddress={"/Agents-page"}
        validUsersList={list}
        userType={"نماینده"}
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
