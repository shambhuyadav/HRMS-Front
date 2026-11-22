'use client';
import { useState } from 'react';

// Static-export friendly form. Point FORM_ENDPOINT at your CRM / form backend (e.g. HubSpot, Formspree, your API).
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '';

export default function DemoForm() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus('sending');
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error('Request failed');
      }
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return <div className="card form-card" role="status"><h2>Thank you!</h2><p>Our team will be in touch shortly.</p></div>;
  }

  return (
    <form className="card form-card" onSubmit={onSubmit}>
      <label>Full name<input name="name" required autoComplete="name" /></label>
      <label>Work email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Company<input name="company" required autoComplete="organization" /></label>
      <label>Number of employees
        <select name="size" required defaultValue="">
          <option value="" disabled>Select</option>
          <option>100–500</option><option>500–2,000</option><option>2,000–10,000</option><option>10,000+</option>
        </select>
      </label>
      <label>What would you like to see?<textarea name="message" rows={3} /></label>
      <button className="btn btn-primary btn-lg" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request my demo'}
      </button>
      {status === 'error' && <p className="error" role="alert">Something went wrong. Please try again.</p>}
    </form>
  );
}
