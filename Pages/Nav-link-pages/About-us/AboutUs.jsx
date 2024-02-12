/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Componnents/Header/Header";
import Footer from "../../../Componnents/Footer/Footer";
import "./AboutUs.scss";

function Main() {
  return (
    <>
      <div className="aboutUsOuterContainer">
        <main>
          <div className="aboutUsInnerContainer">
            <h1 style={{ textAlign: "center" }}>درباره ما</h1>
            <article>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio sit, commodi eius quidem, expedita, vitae numquam
              doloribus rem magni nihil corrupti ipsa quas. Repellat omnis
              veritatis ipsa amet nulla laboriosam sit adipisci expedita nisi
              saepe iste molestias dolorum, quibusdam est laborum soluta earum
              pariatur officiis. Quis laudantium omnis praesentium qui, in sunt
              nihil repellendus consectetur ad laboriosam, saepe cum odio
              deleniti doloribus est eius necessitatibus corporis molestias ab.
              Sunt rem sint nemo voluptatum autem cumque quis debitis? Ab,
              impedit esse voluptas enim reprehenderit officia velit eos nobis
              quia officiis atque dicta voluptate molestiae assumenda cum nisi
              animi vero odio placeat?
            </article>
          </div>
        </main>
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
