import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Terms from "./components/Terms";
import About from "./components/About";

const Container = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/about-us" component={About} />
        <Route path="/terms" component={Terms} />
      </Switch>
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
