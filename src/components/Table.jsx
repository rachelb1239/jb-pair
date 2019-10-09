import React, { Component } from 'react';
import _ from 'lodash';

const data = [ 
  { firstName: "Luke", lastName: "Skywalker", id: 1 },
  { firstName: "Han", lastName: "Solo", id: 2 }, 
  { firstName: "Leia", lastName: "Organa", id: 3 },
  { firstName: "Lando", lastName: "Calrissian", id: 4 } 
]

const formattedData = data.map((value) => {
  return (
    <tr key={value.id}>
      <td>{value.firstName}</td>
      <td>{value.lastName}</td>
    </tr>
  )
})

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: data }

    this.formattedData = this.formattedData.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort() {
    // sort by first name on click
    const sorted =  _.sortBy(this.state.rows, ['firstName']);
    this.setState({ rows: sorted });
  }

  formattedData() {
    return this.state.rows.map((value) => {
      return (
        <tr key={value.id}>
          <td>{value.firstName}</td>
          <td>{value.lastName}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={this.handleSort}>
              First
            </th>
            <th onClick={this.handleSort}>
              Last
            </th>
          </tr>
        </thead>
        <tbody>
          {this.formattedData()}
        </tbody>
      </table>
    )
  }
}

export default Table;