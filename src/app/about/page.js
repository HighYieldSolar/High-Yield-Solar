'use client'; // Add this line at the top of the file




import Head from 'next/head';
import "../globals.css";
import Link from 'next/link'; // heloooooooo 

export default function About() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us - High Yield Solar</title>
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
            <li><Link href="/">Get a Quote</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      <div className="main-content">
        <h1>About Us</h1>
        <div className="about-container">
          <p>
            High Yield Solar is a leading provider of solar panel cleaning, window cleaning, gutter cleaning, and bird proofing services.
            Our team is dedicated to ensuring that your home or business remains clean, efficient, and protected from the elements. With
            years of experience in the industry, we provide high-quality, reliable services to meet all your needs.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide top-notch cleaning and maintenance services for solar panels and other key aspects of your home.
            We prioritize customer satisfaction, safety, and the highest quality service to ensure your home stays clean, functional,
            and energy-efficient.
          </p>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Expert team with years of experience</li>
            <li>Safe, effective cleaning methods</li>
            <li>Affordable and reliable services</li>
            <li>Commitment to sustainability and energy efficiency</li>
          </ul>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 High Yield Solar. All rights reserved.</p>
      </footer>
    </>
  );
}
