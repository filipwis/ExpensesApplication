import React, { Component, useReducer } from "react";

class ExpensesItem extends Component {
  state = {
    expenses: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/expenses")
      .then(res => res.json())
      .then(expenses =>
        this.setState({
          expenses
        })
      );
  }

  deleteData(id) {
    if (window.confirm("Czy z pewnością chcesz usunąć element?")) {
      fetch("http://localhost:3000/expenses/" + id, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      window.location.reload();
    }
  }

  render() {
    return (
      <tbody>
        {this.state.expenses.map(expense => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.value}</td>
            <td>
              <input
                type="button"
                className="btn btn-dark"
                value="Usuń"
                onClick={() => this.deleteData(expense.id)}
              ></input>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default ExpensesItem;
