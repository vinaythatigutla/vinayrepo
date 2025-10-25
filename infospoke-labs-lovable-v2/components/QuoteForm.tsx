'use client';
import { useState } from 'react';
export default function QuoteForm() {
  const [msg, setMsg] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    setMsg('Submitting...');
    const res = await fetch('/api/quote', { method: 'POST', body: new FormData(e.target) });
    setMsg(res.ok ? 'Thank you! We will reply soon.' : 'Error submitting.');
  }
  return (
    <section className="py-12 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Request a Quote</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
        <input name="name" required placeholder="Name" className="border rounded px-3 py-2 w-full"/>
        <input name="email" required type="email" placeholder="Email" className="border rounded px-3 py-2 w-full"/>
        <input name="material" placeholder="Preferred Material" className="border rounded px-3 py-2 w-full"/>
        <input name="file" type="file" className="border rounded px-3 py-2 w-full"/>
        <textarea name="notes" placeholder="Project details..." rows={4} className="border rounded px-3 py-2 w-full"/>
        <button className="bg-brand-blue text-white px-4 py-2 rounded">Submit</button>
        {msg && <p className="text-sm text-gray-600 mt-2">{msg}</p>}
      </form>
    </section>
  );
}
