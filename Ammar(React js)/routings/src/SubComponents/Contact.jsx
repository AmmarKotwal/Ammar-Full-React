import React from 'react'
import Map from './Map'

export default function Contact() {
  return (
    <>
    <br />
    <h1>CONTACT US</h1>
    <div class="container my-5">
    <div class="row">
        <div class="col-md-6">
            <h2>GET IN TOUCH</h2>
            <p>If you have any questions or need assistance, please don’t hesitate to reach out to us. Fill out the form below, and our team will get back to you shortly.</p>

            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter your name" require justify-content-centerd/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number"/>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Your Message</label>
                    <textarea class="form-control" id="message" rows="5" placeholder="Write your message here" required></textarea>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>
        <br />
        <br />

        <div class="col-md-6">
            <h2>LOCATION</h2>
            <br />
            <br />
            <br />
            <Map />
            </div>
    </div>
</div>
</>
  )
}
