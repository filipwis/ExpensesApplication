import React, { Component } from "react";

class ExpensesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expance: "",
      sum: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = "http://localhost:3000/expenses";
    const data = { name: this.state.expance, value: this.state.sum };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
    window.location.reload();
  };

  render() {
    const { expance, sum } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-group">
          <input
            className=" m-2"
            placeholder="Nazwa"
            name="expance"
            required="required"
            value={expance}
            onChange={this.handleChange}
          />
          <br />
          <input
            className=" m-2"
            placeholder="Wartość zł"
            type="number"
            name="sum"
            required="required"
            value={sum}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit" className="btn btn-dark m-2">
            Dodaj
          </button>
        </form>
      </div>
    );
  }
}

export default ExpensesInput;
