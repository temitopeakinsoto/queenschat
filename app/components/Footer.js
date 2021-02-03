import React from 'react'

export default function Footer() {
    return (
        <footer className="border-top text-center small text-muted py-3">
        <p>
          <a href="/" className="mx-1">
            Home
          </a>{" "}
          |{" "}
          <a className="mx-1" href="/about-us">
            About Us
          </a>{" "}
          |{" "}
          <a className="mx-1" href="/terms">
            Terms
          </a>
        </p>
        <p className="m-0">
          Copyright &copy; 2021{" "}
          <a href="/" className="text-muted">
            Queenschat
          </a>
          . All rights reserved.
        </p>
      </footer>
    )
}
