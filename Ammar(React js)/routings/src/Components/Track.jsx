import React from 'react'

export default function Track() {
  return (
    <>
   <div class="container py-5">
    <h1 class="text-center mb-4">TRACK YOUR ORDER</h1>
    
    <div class="card shadow-sm">
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="trackingNumber" class="form-label">Enter Tracking Number</label>
            <input type="text" class="form-control" id="trackingNumber" placeholder="e.g., 123456789"/>
          </div>
          <button type="button" class="btn btn-success w-100">Track</button>
        </form>
      </div>
    </div>


    <div class="card shadow-sm mt-4">
      <div class="card-body">
        <h5 class="card-title">Tracking Details</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong>Order Placed:</strong> January 5, 2025
          </li>
          <li class="list-group-item">
            <strong>Order Shipped:</strong> January 6, 2025
          </li>
          <li class="list-group-item">
            <strong>Out for Delivery:</strong> January 7, 2025
          </li>
          <li class="list-group-item">
            <strong>Delivered:</strong> January 8, 2025
          </li>
        </ul>

      </div>
    </div>
  </div>
   </>
  )
}
