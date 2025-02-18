'use client'; // Add this line at the top of the file

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

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

      {/* HEADER */}
      <header className="bg-black text-white p-4 shadow-md fixed top-0 w-full z-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold">High Yield Solar</h1>
          <p className="text-sm">(951)-505-1147 | info@highyieldsolar.com</p>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="pt-24 pb-4 flex justify-center space-x-4 bg-black shadow-md px-4 sm:px-0 flex-wrap">
        <Link className="btn btn-sm btn-outline text-xs sm:text-base mb-2 sm:mb-0" href="/">Home</Link>
        <Link className="btn btn-sm btn-outline text-xs sm:text-base mb-2 sm:mb-0" href="/">Get a Quote</Link>
        <Link className="btn btn-sm btn-outline text-xs sm:text-base mb-2 sm:mb-0" href="/services">Services</Link>
        <Link className="btn btn-sm btn-outline text-xs sm:text-base mb-2 sm:mb-0" href="/contact">Contact</Link>
        <Link className="btn btn-sm btn-outline text-xs sm:text-base" href="/about">About</Link>
      </nav>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 mt-10">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Contact Us</h1>
        <div className="text-lg text-black space-y-6">
          <p>If you have any questions or would like to request more information about our services, feel free to reach out to us using the contact form below or via phone or email.</p>

          <h2 className="text-2xl font-semibold text-black mb-4">Contact Form</h2>
          <form
            action="https://formspree.io/f/mgvolodq"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New Contact Request" />

            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="first_name" placeholder="First Name" className="input input-bordered w-full bg-white" required />
              <input type="text" name="last_name" placeholder="Last Name" className="input input-bordered w-full bg-white" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="Email" className="input input-bordered w-full bg-white" required />
              <input id="phone" name="phone" type="tel" placeholder="Phone Number" className="input input-bordered w-full bg-white" required />
            </div>

            <textarea name="message" placeholder="Your Message" className="textarea textarea-bordered w-full bg-white mt-4" required></textarea>

            <button type="submit" className="btn btn-black btn-wide text-white font-semibold w-full max-w-lg mt-4">Submit</button>

            {isSubmitted && <p className="text-green-500 mt-4">Your message has been sent!</p>}
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-4 mt-10">
        <p>&copy; 2025 High Yield Solar. All rights reserved.</p>
      </footer>
    </>
  );
}
