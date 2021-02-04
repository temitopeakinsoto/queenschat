import React from 'react';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="border-top text-center small text-muted py-3">
        <p>
          <Link to="/" className="mx-1">
            Home
          </Link>{" "}
          |{" "}
          <Link className="mx-1" to="/about-us">
            About Us
          </Link>{" "}
          |{" "}
          <Link className="mx-1" to="/terms">
            Terms
          </Link>
        </p>
        <p className="m-0">
          Copyright &copy; 2021{" "}
          <Link to="/" className="text-muted">
            Queenschat
          </Link>
          . All rights reserved.
        </p>
      </footer>
    )
}
