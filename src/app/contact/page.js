'use client'; // Add this line at the top of the file




import Head from 'next/head';
import "../globals.css";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' },
    });

    if (response.ok) {
      setIsSubmitted(true);
      form.reset();
    }
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us - High Yield Solar</title>
      </Head>

      <header>
        <div className="top-bar">
          <div className="business-info">
            <span className="business-name">High Yield Solar</span>
            <span className="phone-number">(951)-505-1147 | info@highyieldsolar.com</span>
          </div>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/quote">Get a Quote</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      <div className="main-content">
        <h1>Contact Us</h1>
        <div className="contact-container">
          <p>If you have any questions or would like to request more information about our services, feel free to reach out to us using the contact form below or via phone or email.</p>

          <h2>Contact Form</h2>
          <form
            action="https://formspree.io/f/mgvolodq"
            method="POST"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New Contact Request" />

            <div className="form-row">
              <input type="text" name="first_name" placeholder="First Name" required />
              <input type="text" name="last_name" placeholder="Last Name" required />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Email" required />
              <input id="phone" name="phone" type="tel" placeholder="Phone Number" required />
            </div>

            <textarea name="message" placeholder="Your Message" required></textarea>

            <button type="submit">Submit</button>

            {isSubmitted && <p id="success-message" style={{ color: 'green' }}>Your message has been sent!</p>}
          </form>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 High Yield Solar. All rights reserved.</p>
      </footer>
    </>
  );
}
