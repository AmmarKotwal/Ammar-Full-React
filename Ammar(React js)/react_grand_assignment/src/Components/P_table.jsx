import React from 'react';

export default function P_table({ a, b, c, d, e }) {
  return (
    <div className="table-responsive mt-4">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Flavour</th>
            <th>Size</th>
            <th>Crust</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{a}</td>
            <td>{b}</td>
            <td>{c}</td>
            <td>{d}</td>
            <td>{e}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
