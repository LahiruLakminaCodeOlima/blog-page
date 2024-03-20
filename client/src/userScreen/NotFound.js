import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <div className="not-found-container">
            <div className="d-flex flex-column align-items-center">
                <p style={{fontSize:"100px",marginBottom:'0',fontWeight:"bold"}}>404</p>
                <h3>Page not found</h3>
                <p>Sorry, we can't find the page you're looking for</p>
                <Link  to="/" className="btn btn-primary">Back to Home</Link>

            </div>
        </div>
    </div>
  )
}

export default NotFound