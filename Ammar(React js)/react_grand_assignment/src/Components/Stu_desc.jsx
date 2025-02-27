import React from 'react'
import { useParams } from 'react-router-dom'

export default function Stu_desc() {
    let {get_url} = useParams();
  return (
    <div>
        {
            get_url === "1"?
            (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Std1</h5>
                    </div>
                </div>
            ) : 
            get_url === "2"?
            (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Std2</h5>
                    </div>
                </div>
            ) : 
            get_url === "3"?
            (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Std3</h5>
                    </div>
                </div>
            ) : 
            get_url === "4"?
            (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Std4</h5>
                    </div>
                </div>
            ) : 
            get_url === "5"?
            (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Std5</h5>
                    </div>
                </div>
            ) : 
            get_url === "6"?
            (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Std6</h5>
                    </div>
                </div>
            ) : 
            (
                <h4>Student Not Found</h4>
            )
        }

    </div>
  )
}
