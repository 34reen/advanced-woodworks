"use client";

import { useState } from "react";

export default function ContactForm({ productName }: { productName?: string }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: productName ? `I'm interested in ${productName}` : "",
  });

  return (
    <form className="space-y-4 max-w-md">
      <input
        placeholder="Name"
        className="w-full p-2 border rounded"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Phone"
        className="w-full p-2 border rounded"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <textarea
        placeholder="Message"
        className="w-full p-2 border rounded"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button className="bg-[#3e2f23] text-white px-4 py-2 rounded">
        Send Inquiry
      </button>
    </form>
  );
}