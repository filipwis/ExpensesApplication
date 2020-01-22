import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExpensesInput from "./components/ExpensesInput";
import ExpensesList from "./components/ExpensesList";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <h1>PLANOWANE WYDATKI</h1>
        <br />
        <ExpensesInput />
        <br />
        <ExpensesList />
      </div>
    );
  }
}

export default App;
