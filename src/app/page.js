'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [captcha, setCaptcha] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const [showModal, setShowModal] = useState(false); // New state for showing the modal

  useEffect(() => {
    const phoneInput = document.getElementById('phone');
    phoneInput?.addEventListener('blur', () => {
      const phoneValue = phoneInput.value.trim();

      // Define a regex to allow phone numbers like 5551234567, (555) 123-4567, 555-123-4567, and 555 123 4567
      const phoneRegex = /^(?:\(?\d{3}\)?[\s\-]?)?\d{3}[\s\-]?\d{4}$/;

      if (phoneRegex.test(phoneValue)) {
        phoneInput.value = phoneValue.replace(/[\s\-()]/g, ''); // Remove non-numeric characters
      } else {
        alert('Invalid phone number format. Please enter a valid number.');
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
      setShowModal(true); // Show the modal after successful submission
    }
  };

  return (
    <>
      <Head>
        <title>High Yield Solar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* HEADER */}
      <header className="bg-black text-white p-4 shadow-md fixed top-0 w-full z-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold">High Yield Solar</h1>
          <p className="text-sm">(951)-505-1147 | info@highyieldsolar.com</p>
        </div>
      </header>

      <nav className="pt-24 pb-4 flex justify-center space-x-4 bg-black shadow-md px-4 sm:px-0 flex-wrap">
        <Link className="btn btn-sm btn-outline text-xs sm:text-base mb-2 sm:mb-0" href="/">Home</Link>
        <Link className="btn btn-sm btn-outline text-xs sm:text-base mb-2 sm:mb-0" href="/">Get a Quote</Link>
        <Link className="btn btn-sm btn-outline text-xs sm:text-base mb-2 sm:mb-0" href="/services">Services</Link>
        <Link className="btn btn-sm btn-outline text-xs sm:text-base mb-2 sm:mb-0" href="/contact">Contact</Link>
        <Link className="btn btn-sm btn-outline text-xs sm:text-base" href="/about">About</Link>
      </nav>

      {/* QUOTE SECTION */}
      <div className="flex flex-col items-center mt-10">
        <Image src="/images/tp.png" width={600} height={600} alt="High Yield Solar Logo" className="mb-4" />
        <h2 className="text-3xl text-black font-bold">Why Choose High Yield Solar?</h2>
        <p className="text-xl text-white  text-center max-w-md mt-2">
          We provide top-quality solar panel cleaning, window cleaning, gutter cleaning, and bird proofing services.
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="card w-full max-w-lg mx-auto bg-cyan-400 shadow-md rounded-lg p-6 mt-6 border border-black">
        <h3 className="text-xl font-bold mb-4 text-black">Request a Quote</h3>

        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="first_name" placeholder="First Name" className="input input-bordered w-full bg-white" required />
          <input type="text" name="last_name" placeholder="Last Name" className="input input-bordered w-full bg-white" required />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <input type="email" name="email" placeholder="Email" className="input input-bordered w-full bg-white" required />
          <input id="phone" name="phone" type="tel" placeholder="Phone Number" className="input input-bordered w-full bg-white" required />
        </div>

        <label className="text-lg font-semibold block mt-4 text-black">Address</label>
        <input id="address" name="address" type="text" placeholder="Enter your address..." className="input input-bordered w-full bg-white" required />

        <div className="grid grid-cols-2 gap-4 mt-4">
          <input type="text" name="city" placeholder="City" className="input input-bordered w-full bg-white" required />
          <select name="state" className="select select-bordered w-full bg-white" required>
            <option value="">State</option>
            <option value="California">California</option>
          </select>
        </div>

        <input type="text" name="zip" placeholder="ZIP / Postal Code" className="input input-bordered w-full mt-4 bg-white" required />

{/* SERVICES */}
<p className="mt-4 font-bold text-black">Choose Your Service:</p>
<div className="grid grid-cols-2 gap-4 mt-2">
  <label className="flex items-center space-x-2 text-black font-bold">
    <input type="checkbox" className="checkbox bg-white checked:border-black" name="solar_panel_cleaning" value="Solar Panel Cleaning" />
    <span>Solar Panel Cleaning</span>
  </label>
  <label className="flex items-center space-x-2 text-black font-bold">
    <input type="checkbox" className="checkbox bg-white checked:border-black" name="window_cleaning" value="Window Cleaning" />
    <span>Window Cleaning</span>
  </label>
  <label className="flex items-center space-x-2 text-black font-bold">
    <input type="checkbox" className="checkbox bg-white checked:border-black" name="gutter_cleaning" value="Gutter Cleaning" />
    <span>Gutter Cleaning</span>
  </label>
  <label className="flex items-center space-x-2 text-black font-bold">
    <input type="checkbox" className="checkbox bg-white checked:border-black" name="bird_proofing" value="Bird Proofing" />
    <span>Bird Proofing</span>
  </label>
</div>


        {/* REFERRAL */}
        <p className="mt-4 font-bold text-black">How Did You Hear About Us?</p>
        <select name="referral" className="select select-bordered w-full mt-2 bg-white" required>
          <option value="">Select</option>
          <option value="Google">Google</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Referral">Referral</option>
          <option value="Vehicle">Vehicle</option>
        </select>

        {/* ADDITIONAL INFO */}
        <textarea name="message" placeholder="Additional Information (Optional)" className="textarea textarea-bordered w-full mt-4 bg-white"></textarea>

        {/* CAPTCHA */}
        <label className="block mt-4 text-black font-semibold">What is 3 + 4?</label>
        <input type="text" id="captcha" name="captcha" className="input input-bordered w-full mt-2 bg-white" required onChange={(e) => setCaptcha(e.target.value)} />

        {/* SUBMIT BUTTON */}
        <div className="flex justify-center w-full mt-4">
          <button className="text-white btn btn-black btn-wide font-semibold w-full max-w-lg">Submit</button>
        </div>
      </form>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-4 mt-10">
        <p>&copy; 2025 High Yield Solar. All rights reserved.</p>
      </footer>

{/* SUCCESS MESSAGE MODAL */}
{showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h3 className="text-xl font-semibold text-black">Thank You for Your Request!</h3>
            <p className="mt-4 text-black">Your request has been submitted successfully. We&apos;ll be in touch shortly.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
