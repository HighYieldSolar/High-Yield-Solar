'use client'; // Add this line at the top of the file




import Head from 'next/head';
import "./globals.css";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [captcha, setCaptcha] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const phoneInput = document.getElementById('phone');
    phoneInput?.addEventListener('blur', () => {
      try {
        const parsed = libphonenumber.parsePhoneNumberFromString(phoneInput.value.trim(), 'US');
        if (parsed && parsed.isValid()) {
          phoneInput.value = parsed.formatInternational();
        } else {
          alert('Invalid phone number. Please enter a valid number.');
          phoneInput.value = '';
        }
      } catch (error) {
        alert('Invalid phone number format.');
        phoneInput.value = '';
      }
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (captcha !== '7') {
      alert('Incorrect CAPTCHA answer. Please try again.');
      return;
    }
    
    const formData = new FormData(event.target);
    const response = await fetch('https://formspree.io/f/mgvolodq', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      setSuccessMessage(true);
      event.target.reset();
    }
  };

  return (
    <>
      <Head>
        <title>High Yield Solar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

      <div className="quote-container">
        <div className="quote-info">
          <Image src="/images/tp.png" width={300} height={300} alt="High Yield Solar Logo" className="business-logo" />
          <h2>Why Choose High Yield Solar?</h2>
          <p>We provide top-quality solar panel cleaning, window cleaning, gutter cleaning, and bird proofing services.</p>
        </div>

        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-row">
            <input type="text" name="first_name" placeholder="FIRST NAME" required />
            <input type="text" name="last_name" placeholder="LAST NAME" required />
          </div>
          <div className="form-row">
            <input type="email" name="email" placeholder="EMAIL" required />
            <input id="phone" name="phone" type="tel" placeholder="Enter phone number" required />
          </div>
          <label htmlFor="address">Address</label>
          <input id="address" name="address" type="text" placeholder="Start typing your address..." required />

          <div className="form-row">
            <input type="text" name="city" placeholder="CITY" required />
            <select name="state" required>
              <option value="">STATE</option>
              <option value="California">California</option>
            </select>
          </div>

          <input type="text" name="zip" placeholder="ZIP / POSTAL CODE" required />
          <p className="form-label">CHOOSE YOUR SERVICE:</p>
          <div className="service-options">
            <label><input type="checkbox" name="service" value="Solar Panel Cleaning" /> Solar Panel Cleaning</label>
            <label><input type="checkbox" name="service" value="Window Cleaning" /> Window Cleaning</label>
            <label><input type="checkbox" name="service" value="Gutter Cleaning" /> Gutter Cleaning</label>
            <label><input type="checkbox" name="service" value="Bird Proofing" /> Bird Proofing</label>
          </div>

          <p className="form-label">HOW DID YOU HEAR ABOUT US?</p>
          <select name="referral" required>
            <option value="">Select</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Referral">Referral</option>
            <option value="Vehicle">Vehicle</option>
          </select>
          
          <textarea name="message" placeholder="Additional Information (Optional)"></textarea>

          <label htmlFor="captcha">What is 3 + 4?</label>
          <input type="text" id="captcha" name="captcha" required onChange={(e) => setCaptcha(e.target.value)} />
          
          <button type="submit">SUBMIT</button>
          {successMessage && <p style={{ color: 'green' }}>Your request has been sent!</p>}
        </form>
      </div>

      <footer>
        <p>&copy; 2025 High Yield Solar. All rights reserved.</p>
      </footer>
    </>
  );
}