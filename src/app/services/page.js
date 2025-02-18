'use client'; // Add this line at the top of the file

import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Our Services - High Yield Solar</title>
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
        <h1 className="text-3xl font-bold text-center text-black mb-6">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="service-card bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-black mb-4">Solar Panel Cleaning</h2>
            <p>We offer professional cleaning for solar panels to ensure maximum efficiency and longevity. Our team uses safe and effective methods to keep your panels spotless and fully functional.</p>
          </div>
          <div className="service-card bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-black mb-4">Window Cleaning</h2>
            <p>Our window cleaning services are perfect for both residential and commercial properties. We remove dirt, grime, and streaks to ensure your windows sparkle.</p>
          </div>
          <div className="service-card bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-black mb-4">Gutter Cleaning</h2>
            <p>Keep your gutters clear of debris with our professional cleaning service. We ensure water flows freely, protecting your home from potential damage caused by clogged gutters.</p>
          </div>
          <div className="service-card bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-black mb-4">Bird Proofing</h2>
            <p>We provide effective bird proofing solutions to prevent birds from nesting in unwanted areas. Our solutions are humane and help keep your property clean and safe.</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-4 mt-10">
        <p>&copy; 2025 High Yield Solar. All rights reserved.</p>
      </footer>
    </>
  );
}
