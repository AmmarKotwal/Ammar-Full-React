import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Feedback() {
  let [name, setName] = useState("");
  let [msg, setMsg] = useState("");
  let [feedbackList, setFeedbackList] = useState([]);

  function submit() {
    if (name.trim() !== "" && msg.trim() !== "") {
      setFeedbackList([...feedbackList, { name, msg }]);
      setName("");
      setMsg("");
    }
  }

  return (
    <div className="container mt-5 p-4 bg-light rounded shadow-lg">
      <h2 className="text-center mb-3">Feedback Form</h2>

      <div className="mb-3">
        <label className="form-label">Your Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Your Feedback:</label>
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <button className="btn btn-primary w-100 fw-bold" onClick={submit}>
        Submit
      </button>

      {feedbackList.length > 0 ? (
        <div className="mt-4">
          <h3 className="text-center">Submitted Feedback</h3>
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {feedbackList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.msg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center mt-3 text-muted">No Feedback Yet!</p>
      )}
    </div>

    
  );
}
