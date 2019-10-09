import React from 'react';

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

const Table = () => (
  <table className="table">
    <thead>
      <tr>
        <th>
          First
        </th>
        <th>
          Last
        </th>
      </tr>
    </thead>
    <tbody>
      {formattedData}
    </tbody>
  </table>
);

export default Table;