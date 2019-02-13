import React from "react";
import "./App.scss";
import Transaction from "./components/Transaction";

const App = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Welcome</h1>
            <h2 className="subtitle">Budgeting App</h2>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <Transaction />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
