import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";

const Container = () => {
  return (
    <>
      <Header />
      <Register />
      <Footer />
    </>
  );
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Router>
    <Container />
  </Router>,
  document.getElementById("root")
);
