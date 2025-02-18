'use client'; // Add this line at the top of the file

import Head from 'next/head';
import Link from 'next/link'; 

export default function About() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us - High Yield Solar</title>
      </Head>

      {/* HEADER */}
      <header className="bg-black text-white p-4 shadow-md fixed top-0 w-full z-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold">High Yield Solar</h1>
          <p className="text-sm">(951)-505-1147 | info@highyieldsolar.com</p>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="pt-24 pb-4 flex justify-center space-x-4 bg-black shadow-md">
        <Link className="btn btn-sm btn-outline" href="/">Home</Link>
        <Link className="btn btn-sm btn-outline" href="/">Get a Quote</Link>
        <Link className="btn btn-sm btn-outline" href="/services">Services</Link>
        <Link className="btn btn-sm btn-outline" href="/contact">Contact</Link>
        <Link className="btn btn-sm btn-outline" href="/about">About</Link>
      </nav>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 mt-10">
        <h1 className="text-3xl font-bold text-center text-black mb-6">About Us</h1>
        <div className="text-lg text-black space-y-6">
          <p>
            High Yield Solar is a leading provider of solar panel cleaning, window cleaning, gutter cleaning, and bird proofing services.
            Our team is dedicated to ensuring that your home or business remains clean, efficient, and protected from the elements. With
            years of experience in the industry, we provide high-quality, reliable services to meet all your needs.
          </p>
          <h2 className="text-2xl font-semibold text-black">Our Mission</h2>
          <p>
            Our mission is to provide top-notch cleaning and maintenance services for solar panels and other key aspects of your home.
            We prioritize customer satisfaction, safety, and the highest quality service to ensure your home stays clean, functional,
            and energy-efficient.
          </p>
          <h2 className="text-2xl font-semibold text-black">Why Choose Us?</h2>
          <ul className="list-disc pl-6">
            <li>Expert team with years of experience</li>
            <li>Safe, effective cleaning methods</li>
            <li>Affordable and reliable services</li>
            <li>Commitment to sustainability and energy efficiency</li>
          </ul>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-4 mt-10">
        <p>&copy; 2025 High Yield Solar. All rights reserved.</p>
      </footer>
    </>
  );
}
