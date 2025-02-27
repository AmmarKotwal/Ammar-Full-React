import React from 'react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'White', color: '#fff', padding: '40px 0' }}>
                <div className="container text-center text-success">
                    <div className="d-flex justify-content-center mb-3">
                        <a href="https://facebook.com" className="text-white mx-2">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" className="text-white mx-2">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" className="text-white mx-2">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" className="text-white mx-2">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <p>&copy; 2025 MyWebsite. All Rights Reserved.</p>
                    <p className="mb-0" style={{ fontSize: '14px' }}>
                        Designed with love by AMMAR KOTWAL.
                    </p>
                </div>
            </footer>
  )
}
