import React, { Component } from "react";
import ExpensesItem from "./ExpensesItem";

class ExpensesList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>LISTA WYDATKÓW</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Nazwa</th>
              <th>Wartość (zł)</th>
              <th></th>
            </tr>
          </thead>
          <ExpensesItem />
          <tfoot className="tfoot-dark">
            <tr>
              <th>Suma:</th>
              <th>Wartość dodana</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default ExpensesList;
