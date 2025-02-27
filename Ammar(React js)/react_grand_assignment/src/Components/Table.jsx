import React, {useState} from 'react'

export default function Table(props) {
  return (
    <div>
        <table className='table table-hover table-striped-rows'>
            <thead className='table-primary'>
            <tr>
                <th>Name</th>
                <th>No.Of Units</th>
                <th>Total Bill</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.units}</td>
                    <td>{props.bill}</td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}
