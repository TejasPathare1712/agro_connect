
import { useState } from 'react';
import { registerFarmer } from '../services/api';

export default function FarmerRegistration() {
  const [farmer, setFarmer] = useState({ name: '', email: '', phone: '', location: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerFarmer(farmer);
      alert('Farmer Registered Successfully!');
      setFarmer({ name: '', email: '', phone: '', location: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to Register.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Farmer Registration</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input className="border p-2 rounded" type="text" placeholder="Name" value={farmer.name} onChange={(e) => setFarmer({ ...farmer, name: e.target.value })} />
        <input className="border p-2 rounded" type="email" placeholder="Email" value={farmer.email} onChange={(e) => setFarmer({ ...farmer, email: e.target.value })} />
        <input className="border p-2 rounded" type="text" placeholder="Phone" value={farmer.phone} onChange={(e) => setFarmer({ ...farmer, phone: e.target.value })} />
        <input className="border p-2 rounded" type="text" placeholder="Location" value={farmer.location} onChange={(e) => setFarmer({ ...farmer, location: e.target.value })} />
        <button className="bg-green-600 text-white p-2 rounded" type="submit">Register</button>
      </form>
    </div>
  );
}
