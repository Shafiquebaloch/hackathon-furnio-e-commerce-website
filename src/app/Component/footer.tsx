import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="wrapper">  {/* Wrapper div to apply flexbox layout */}
      {/* Main content goes here */}
      <div className="main-content">
        {/* Your other content goes here */}
      </div>

      {/* Footer section */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Funiro.</h2>
              <address className="not-italic">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </address>
            </div>

            {/* Links */}
            <nav className="space-y-4">
              <h3 className="text-sm font-medium">Links</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>

            {/* Help */}
            <nav className="space-y-4">
              <h3 className="text-sm font-medium">Help</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/payment">Payment Options</Link></li>
                <li><Link href="/returns">Returns</Link></li>
                <li><Link href="/privacy">Privacy Policies</Link></li>
              </ul>
            </nav>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Newsletter</h3>
              <form className="flex gap-2">
                {/* Your newsletter input and button */}
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="max-w-[220px]"
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="bg-blue-600 text-white py-2 px-4">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t pt-8">
            <p className="text-sm text-muted-foreground">
              2023 furino. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
