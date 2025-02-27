import React from 'react'

export default function OurMotive() {
  return (
    <>
      <div class="text-bg-success">
      <div class="container my-5">
        <br />
    <section class="mb-5">
        <h2 class="text-center mb-4">Milestones Achieved</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <h3 class="card-title">Customer Satisfaction</h3>
                        <p class="card-text">99% positive feedback and round-the-clock support for all our customers.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <h3 class="card-title">Expanding Reach</h3>
                        <p class="card-text">Global operations in over 50 countries with localized delivery hubs.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <h3 class="card-title">Technological Innovations</h3>
                        <p class="card-text">Real-time tracking and eco-friendly initiatives for sustainable logistics.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mb-5">
        <h2 class="text-center mb-4">Numbers That Speak for Themselves</h2>
        <div class="row text-center">
            <div class="col-md-4">
                <h3>1 Million+</h3>
                <p>Deliveries Completed</p>
            </div>
            <div class="col-md-4">
                <h3>98%</h3>
                <p>On-Time Delivery Rate</p>
            </div>
            <div class="col-md-4">
                <h3>500k+</h3>
                <p>Happy Customers</p>
            </div>
        </div>
    </section>

    <section class="mb-5">
        <h2 class="text-center mb-4">Testimonials</h2>
        <div id="carouselTestimonials" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <blockquote class="blockquote text-center">
                        <p class="mb-0">"[Courier Company Name] is the best in the business! My packages always arrive on time."
                        </p>
                        {/* <footer class="blockquote-footer">Customer Name</footer> */}
                    </blockquote>
                </div>
                <div class="carousel-item">
                    <blockquote class="blockquote text-center">
                        <p class="mb-0">"Their tracking system is top-notch, and I appreciate their eco-friendly efforts."
                        </p>
                        <footer class="blockquote-footer">Customer Name</footer>
                    </blockquote>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>

   
</div>
<br />
      </div>
      
      </>
  )
}
