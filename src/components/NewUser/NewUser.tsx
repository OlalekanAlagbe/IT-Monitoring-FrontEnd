import React, { useState } from 'react';

export default function NewUserComponent() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = 'http://localhost:3000'; // Ensure 'http://' is present

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {

    // Retrieve the token object from localStorage
    const tokenObjectString = localStorage.getItem('token');
    console.log('Token object string:', tokenObjectString); // Log the token object string

    if (!tokenObjectString) {
      throw new Error('No token found. Please log in again.');
    }
    // Parse the token object
    const tokenObject = JSON.parse(tokenObjectString);
    console.log('Token object:', tokenObject); // Log the parsed token object

    // Extract the token property
    const token = tokenObject.token;
    console.log('Token:', token); // Log the token
      const response = await fetch(`${BASE_URL}/api/create-users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      console.log(localStorage.getItem('token'));

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create user');
      }

      setSuccess(true);
      setFormData({ email: '', password: '', name: '', role: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#DD4F05]">Create New User</h2>
      {error && <p className="text-red-500 mb-4 p-3 bg-red-100 rounded">{error}</p>}
      {success && <p className="text-green-500 mb-4 p-3 bg-green-100 rounded">User created successfully!</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#DD4F05] hover:bg-[#C04604] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DD4F05] disabled:opacity-50 transition duration-150 ease-in-out"
        >
          {isLoading ? 'Creating...' : 'Create User'}
        </button>
      </form>
    </div>
  );
}