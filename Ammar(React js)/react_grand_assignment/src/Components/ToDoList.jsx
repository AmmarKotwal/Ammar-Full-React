import React, { useState } from 'react';

export default function ToDoList() {
    const [item, setItem] = useState("");
    const [list, setList] = useState([]);

    function addItem() {
        if (item.trim() !== "") {
            if (list.includes(item.trim())) {
                alert("This item already exists!");
            } else {
                setList([...list, item.trim()]);
                setItem("");
            }
        }
    }

    function deleteItem(index) {
        if (window.confirm("Are you sure you want to delete this item?")) {
            setList(list.filter((_, i) => i !== index));
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className=" container mt-5 p-4 bg-light rounded shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">To-Do List</h1>
                <div className="flex space-x-2 mb-4">
                    <div class="input-group mb-3">
                        <input type="text"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            className="form-control"
                            placeholder="Enter a task..." />
                        <button
                            onClick={addItem}
                            className="btn btn-outline-success input-group-text"
                        >
                            <i className='bi bi-plus'></i>
                        </button>
                    </div>

                </div>
                {list.length === 0 ? (
                    <p className="text-center text-gray-500">No items in the list yet</p>
                ) : (
                    <div className="">

                        {list.map((task, index) => (
                            <div
                                key={index}
                                className="border flex justify-between p-2 my-2 bg-gray-100 rounded-lg shadow">
                                <span className="text-gray-700">{task}</span>&nbsp;&nbsp;&nbsp;
                                <button
                                    onClick={() => deleteItem(index)}
                                    className="btn btn-sm btn-danger"
                                >

                                    <i className='bi bi-trash'></i>

                                </button>
                            </div>

                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
