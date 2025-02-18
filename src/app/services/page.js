'use client'; // Add this line at the top of the file


import Head from 'next/head';
import "../globals.css";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Our Services - High Yield Solar</title>
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
        <h1>Our Services</h1>
        <div className="services-container">
          <div className="service">
            <h2>Solar Panel Cleaning</h2>
            <p>We offer professional cleaning for solar panels to ensure maximum efficiency and longevity. Our team uses safe and effective methods to keep your panels spotless and fully functional.</p>
          </div>
          <div className="service">
            <h2>Window Cleaning</h2>
            <p>Our window cleaning services are perfect for both residential and commercial properties. We remove dirt, grime, and streaks to ensure your windows sparkle.</p>
          </div>
          <div className="service">
            <h2>Gutter Cleaning</h2>
            <p>Keep your gutters clear of debris with our professional cleaning service. We ensure water flows freely, protecting your home from potential damage caused by clogged gutters.</p>
          </div>
          <div className="service">
            <h2>Bird Proofing</h2>
            <p>We provide effective bird proofing solutions to prevent birds from nesting in unwanted areas. Our solutions are humane and help keep your property clean and safe.</p>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 High Yield Solar. All rights reserved.</p>
      </footer>
    </>
  );
}
