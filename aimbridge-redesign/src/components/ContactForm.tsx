'use client';

import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('full_name'),
      email: formData.get('email'),
      mobile: phone,
      education: formData.get('education'),
      place: formData.get('place'),
    };

    // This simulates the lead being sent
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-xl mx-auto my-10 p-10 bg-black/30 backdrop-blur-sm rounded-[28px] border border-white/20 shadow-2xl font-sans text-white">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-base font-medium">Full Name</label>
            <input 
              name="full_name" 
              required 
              placeholder="John Doe" 
              className="w-full h-[52px] bg-white text-gray-900 rounded-xl px-4 text-sm focus:ring-4 focus:ring-blue-500/40 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-base font-medium">Email Address</label>
            <input 
              name="email" 
              type="email" 
              required 
              placeholder="john@example.com" 
              className="w-full h-[52px] bg-white text-gray-900 rounded-xl px-4 text-sm focus:ring-4 focus:ring-blue-500/40 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-base font-medium">Mobile Number</label>
            <PhoneInput
              defaultCountry="in"
              value={phone}
              onChange={(p) => setPhone(p)}
              inputClassName="!w-full !h-[52px] !bg-white !text-gray-900 !rounded-xl !border-none !text-sm !px-4"
              className="!w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-base font-medium">Education Level</label>
            <select 
  name="education" 
  required 
  defaultValue=""
  className="w-full h-[52px] bg-white text-gray-900 rounded-xl px-4 text-sm focus:ring-4 focus:ring-blue-500/40 outline-none transition-all appearance-none cursor-pointer"
  style={{
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 15px center',
    backgroundSize: '14px'
  }}
>
  <option value="" disabled>Select your level</option>
  <option value="NEET Preparation">NEET Preparation</option>
  <option value="12th Bio Science">12th Bio Science</option>
  <option value="12th Computer Science">12th Computer Science</option>
  <option value="11th">11th</option>
  <option value="10th">10th</option>
  <option value="Other">Other</option>
</select>
          </div>

          <div className="space-y-2">
            <label className="block text-base font-medium">Place/City</label>
            <input 
              name="place" 
              required 
              placeholder="e.g. Mumbai" 
              className="w-full h-[52px] bg-white text-gray-900 rounded-xl px-4 text-sm focus:ring-4 focus:ring-blue-500/40 outline-none transition-all"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full h-14 bg-[#1f6db3] hover:bg-[#165186] text-white font-bold rounded-xl uppercase tracking-wider text-sm transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            {loading ? 'Sending...' : 'Get Free Consultation'}
            {!loading && <Send size={18} />}
          </button>
        </form>
      ) : (
        <div className="py-10 text-center animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 uppercase">Success!</h3>
          <p className="text-blue-100">Thank you for choosing Aimbridge. We will contact you shortly.</p>
        </div>
      )}
    </div>
  );
}