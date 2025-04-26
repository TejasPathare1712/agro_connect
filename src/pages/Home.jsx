import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to AgroConnect</h1>
      <p className="text-lg mb-6">Empowering Farmers. Connecting Customers.</p>
      <div className="flex gap-4">
        <Link to="/register-farmer">
          <button className="bg-green-600 text-white p-3 rounded-lg">Register Farmer</button>
        </Link>
        <Link to="/register-product">
          <button className="bg-yellow-600 text-white p-3 rounded-lg">Register Product</button>
        </Link>
        <Link to="/products">
          <button className="bg-blue-600 text-white p-3 rounded-lg">View Products</button>
        </Link>
      </div>
    </div>
  );
}