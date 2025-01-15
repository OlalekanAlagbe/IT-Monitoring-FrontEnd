import { useState } from 'react';
import { Mail, User, AlertCircle, Loader2, CheckCircle } from 'lucide-react';

export default function ForgotPasswordC() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const BASE_URL = 'https://it-monitoingbackend.onrender.com'; // Ensure 'http://' is present


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`${BASE_URL}/api/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit request');
      }

      setSuccess('Request submitted successfully!');
      setFormData({ name: '', email: '', subject: '' }); // Reset form
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#DD4F05] flex items-center justify-center p-8">
      <div className="w-full max-w-5xl flex gap-8 items-center">
        <div className="bg-white rounded-lg shadow-lg p-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Contact Admin</h1>
            <p className="text-[#DD4F05] text-lg">
              Forgot your password? No problem. Fill the form and an email will be sent to you when the admin replies.
            </p>
          </div>

          {error && (
            <div className="flex items-center gap-2 bg-red-100 p-3 rounded-md mb-4">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-500">{error}</p>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 bg-green-100 p-3 rounded-md mb-4">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <p className="text-green-500">{success}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC4A12]"
              />
            </div>

            <div className="relative">
              <Mail className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC4A12]"
              />
            </div>

            <div className="relative">
              <AlertCircle className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC4A12]"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-3 text-lg rounded-md hover:bg-black/90 transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <img src="forgotPasswordImage.png" alt="Forgot Password Illustration" />
        </div>
      </div>
    </div>
  );
}
