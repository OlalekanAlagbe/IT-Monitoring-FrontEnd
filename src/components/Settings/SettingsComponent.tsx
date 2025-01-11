
import { useState, useEffect } from 'react'

interface User {
  email: string;
  name: string;
  role: string;
}
const SettingsComponent = () => {
    const [user, setUser] = useState<User | null>(null)
    const [passwordForm, setPasswordForm] = useState({
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const BASE_URL = 'http://localhost:3000'; // Ensure 'http://' is present
  
    useEffect(() => {
      // Fetch user data when component mounts
      fetchUserData()
    }, [])
  
    const fetchUserData = async () => {

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
      try {
        const response = await fetch(`${BASE_URL}/api/user`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        if (!response.ok) throw new Error('Failed to fetch user data')
        const userData = await response.json()
        setUser(userData)
      } catch (err) {
        setError('Failed to load user data')
      }
    }
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsLoading(true)
      setError('')
      setSuccess('')
  
      if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        setError('New passwords do not match')
        setIsLoading(false)
        return
      }
  
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
        const response = await fetch(`${BASE_URL}/api/user/change-password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            oldPassword: passwordForm.oldPassword,
            newPassword: passwordForm.newPassword
          })
        })
  
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to change password')
        }
  
        setSuccess('Password changed successfully')
        setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '' })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred')
      } finally {
        setIsLoading(false)
      }
    }
  
    if (!user) {
      return <div className="text-center">Loading user data...</div>
    }
  
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#DD4F05]">User Settings</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">User Information</h3>
          <div className="space-y-2">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Change Password</h3>
          {error && <p className="text-red-500 mb-4 p-3 bg-red-100 rounded">{error}</p>}
          {success && <p className="text-green-500 mb-4 p-3 bg-green-100 rounded">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">Old Password</label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                required
                value={passwordForm.oldPassword}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                required
                value={passwordForm.newPassword}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                value={passwordForm.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#DD4F05] hover:bg-[#C04604] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DD4F05] disabled:opacity-50 transition duration-150 ease-in-out"
            >
              {isLoading ? 'Changing Password...' : 'Change Password'}
            </button>
          </form>
        </div>
      </div>
    )
  }

export default SettingsComponent