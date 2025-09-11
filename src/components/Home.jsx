import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  let navigate=useNavigate();
  return (
    <div>
      
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Shop With Us</h1>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
       
        <div className="space-x-4">
          <button onClick={()=>navigate('/card')} className="px-6 py-3 border border-white hover:bg-white hover:text-gray-800 transition">
            Shop Now
          </button>
          <button className="px-6 py-3 bg-white text-gray-800 font-semibold hover:bg-gray-100 transition">
            Club Membership
          </button>
        </div>
      </div>

      {/* Our Products Section */}
      <div className="text-center py-16">
        <p className="uppercase text-gray-500 mb-2">Popular Products</p>
        <h2 className="text-4xl font-bold mb-4">Our Products</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet.
        </p>
      </div>

    </div>
  );
}

