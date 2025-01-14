
// import { useState, useEffect } from 'react'

// interface User {
//   email: string;
//   name: string;
//   role: string;
// }
// const SettingsComponent = () => {
//     const [user, setUser] = useState<User | null>(null)
//     const [passwordForm, setPasswordForm] = useState({
//       oldPassword: '',
//       newPassword: '',
//       confirmPassword: ''
//     })
//     const [error, setError] = useState('')
//     const [success, setSuccess] = useState('')
//     const [isLoading, setIsLoading] = useState(false)
//     const BASE_URL = 'http://localhost:3000'; // Ensure 'http://' is present
  
//     useEffect(() => {
//       // Fetch user data when component mounts
//       fetchUserData()
//     }, [])
  
//     const fetchUserData = async () => {

//     // Retrieve the token object from localStorage
//     const tokenObjectString = localStorage.getItem('token');
//     console.log('Token object string:', tokenObjectString); // Log the token object string

//     if (!tokenObjectString) {
//       throw new Error('No token found. Please log in again.');
//     }
//     // Parse the token object
//     const tokenObject = JSON.parse(tokenObjectString);
//     console.log('Token object:', tokenObject); // Log the parsed token object

//     // Extract the token property
//     const token = tokenObject.token;
//       try {
//         const response = await fetch(`${BASE_URL}/api/user`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         })
//         if (!response.ok) throw new Error('Failed to fetch user data')
//         const userData = await response.json()
//         setUser(userData)
//       } catch (err) {
//         setError('Failed to load user data')
//       }
//     }
  
//     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setPasswordForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
//     }
  
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault()
//       setIsLoading(true)
//       setError('')
//       setSuccess('')
  
//       if (passwordForm.newPassword !== passwordForm.confirmPassword) {
//         setError('New passwords do not match')
//         setIsLoading(false)
//         return
//       }
  
//       try {
//          // Retrieve the token object from localStorage
//           const tokenObjectString = localStorage.getItem('token');
//           console.log('Token object string:', tokenObjectString); // Log the token object string

//           if (!tokenObjectString) {
//                throw new Error('No token found. Please log in again.');
//            }
//             // Parse the token object
//             const tokenObject = JSON.parse(tokenObjectString);
//             console.log('Token object:', tokenObject); // Log the parsed token object

//             // Extract the token property
//             const token = tokenObject.token;
//         const response = await fetch(`${BASE_URL}/api/user/change-password`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//           },
//           body: JSON.stringify({
//             oldPassword: passwordForm.oldPassword,
//             newPassword: passwordForm.newPassword
//           })
//         })
  
//         if (!response.ok) {
//           const errorData = await response.json()
//           throw new Error(errorData.error || 'Failed to change password')
//         }
  
//         setSuccess('Password changed successfully')
//         setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '' })
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An unexpected error occurred')
//       } finally {
//         setIsLoading(false)
//       }
//     }
  
//     if (!user) {
//       return <div className="text-center">Loading user data...</div>
//     }
  
//     return (
//       <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-[#DD4F05]">User Settings</h2>
        
//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">User Information</h3>
//           <div className="space-y-2">
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Role:</strong> {user.role}</p>
//           </div>
//         </div>
  
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">Change Password</h3>
//           {error && <p className="text-red-500 mb-4 p-3 bg-red-100 rounded">{error}</p>}
//           {success && <p className="text-green-500 mb-4 p-3 bg-green-100 rounded">{success}</p>}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">Old Password</label>
//               <input
//                 type="password"
//                 id="oldPassword"
//                 name="oldPassword"
//                 required
//                 value={passwordForm.oldPassword}
//                 onChange={handlePasswordChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
//               />
//             </div>
//             <div>
//               <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
//               <input
//                 type="password"
//                 id="newPassword"
//                 name="newPassword"
//                 required
//                 value={passwordForm.newPassword}
//                 onChange={handlePasswordChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
//               />
//             </div>
//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 required
//                 value={passwordForm.confirmPassword}
//                 onChange={handlePasswordChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#DD4F05] hover:bg-[#C04604] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DD4F05] disabled:opacity-50 transition duration-150 ease-in-out"
//             >
//               {isLoading ? 'Changing Password...' : 'Change Password'}
//             </button>
//           </form>
//         </div>
//       </div>
//     )
//   }

// export default SettingsComponent



// import React, { useState, useEffect } from 'react';

// interface User {
//   email: string;
//   name: string;
//   role: string;
// }

// const SettingsComponent = () => {
//   // State for New User Form
//   const [newUserFormData, setNewUserFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     role: ''
//   });
//   const [newUserError, setNewUserError] = useState('');
//   const [newUserSuccess, setNewUserSuccess] = useState(false);
//   const [isNewUserLoading, setIsNewUserLoading] = useState(false);

//   // State for Settings
//   const [user, setUser] = useState<User | null>(null);
//   const [passwordForm, setPasswordForm] = useState({
//     oldPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });
//   const [settingsError, setSettingsError] = useState('');
//   const [settingsSuccess, setSettingsSuccess] = useState('');
//   const [isSettingsLoading, setIsSettingsLoading] = useState(false);

//   const BASE_URL = 'http://localhost:3000';

//   // Fetch user data when component mounts
//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     const tokenObjectString = localStorage.getItem('token');
//     if (!tokenObjectString) {
//       throw new Error('No token found. Please log in again.');
//     }
//     const tokenObject = JSON.parse(tokenObjectString);
//     const token = tokenObject.token;

//     try {
//       const response = await fetch(`${BASE_URL}/api/user`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       if (!response.ok) throw new Error('Failed to fetch user data');
//       const userData = await response.json();
//       setUser(userData);
//     } catch (err) {
//       setSettingsError('Failed to load user data');
//     }
//   };

//   const handleNewUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setNewUserFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleNewUserSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsNewUserLoading(true);
//     setNewUserError('');
//     setNewUserSuccess(false);

//     try {
//       const tokenObjectString = localStorage.getItem('token');
//       if (!tokenObjectString) {
//         throw new Error('No token found. Please log in again.');
//       }
//       const tokenObject = JSON.parse(tokenObjectString);
//       const token = tokenObject.token;

//       const response = await fetch(`${BASE_URL}/api/create-users`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(newUserFormData)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to create user');
//       }

//       setNewUserSuccess(true);
//       setNewUserFormData({ email: '', password: '', name: '', role: '' });
//     } catch (err) {
//       setNewUserError(err instanceof Error ? err.message : 'An unexpected error occurred');
//     } finally {
//       setIsNewUserLoading(false);
//     }
//   };

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPasswordForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSettingsLoading(true);
//     setSettingsError('');
//     setSettingsSuccess('');

//     if (passwordForm.newPassword !== passwordForm.confirmPassword) {
//       setSettingsError('New passwords do not match');
//       setIsSettingsLoading(false);
//       return;
//     }

//     try {
//       const tokenObjectString = localStorage.getItem('token');
//       if (!tokenObjectString) {
//         throw new Error('No token found. Please log in again.');
//       }
//       const tokenObject = JSON.parse(tokenObjectString);
//       const token = tokenObject.token;

//       const response = await fetch(`${BASE_URL}/api/user/change-password`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           oldPassword: passwordForm.oldPassword,
//           newPassword: passwordForm.newPassword
//         })
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to change password');
//       }

//       setSettingsSuccess('Password changed successfully');
//       setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '' });
//     } catch (err) {
//       setSettingsError(err instanceof Error ? err.message : 'An unexpected error occurred');
//     } finally {
//       setIsSettingsLoading(false);
//     }
//   };

//   if (!user) {
//     return <div className="text-center">Loading user data...</div>;
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6 text-[#DD4F05]">User Management</h2>

//       {/* New User Form */}
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-4 text-gray-700">Create New User</h3>
//         {newUserError && <p className="text-red-500 mb-4 p-3 bg-red-100 rounded">{newUserError}</p>}
//         {newUserSuccess && <p className="text-green-500 mb-4 p-3 bg-green-100 rounded">User created successfully!</p>}
//         <form onSubmit={handleNewUserSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               value={newUserFormData.email}
//               onChange={handleNewUserChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               value={newUserFormData.password}
//               onChange={handleNewUserChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
//             />
//           </div>
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={newUserFormData.name}
//               onChange={handleNewUserChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
//             />
//           </div>
//           <div>
//             <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
//             <select
//               id="role"
//               name="role"
//               value={newUserFormData.role}
//               onChange={handleNewUserChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
//             >
//               <option value="">Select a role</option>
//               <option value="admin">Admin</option>
//               <option value="user">User</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             disabled={isNewUserLoading}
//             className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#DD4F05] hover:bg-[#C04604] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DD4F05] disabled:opacity-50 transition duration-150 ease-in-out"
//           >
//             {isNewUserLoading ? 'Creating...' : 'Create User'}
//           </button>
//         </form>
//       </div>

//       {/* User Settings */}
//       <div>
//         <h3 className="text-xl font-semibold mb-4 text-gray-700">User Settings</h3>
//         <div className="mb-8">
//           <h4 className="text-lg font-semibold mb-4 text-gray-700">User Information</h4>
//           <div className="space-y-2">
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Role:</strong> {user.role}</p>
//           </div>
//         </div>

//         <div>
//           <h4 className="text-lg font-semibold mb-4 text-gray-700">Change Password</h4>
//           {settingsError && <p className="text-red-500 mb-4 p-3 bg-red-100 rounded">{settingsError}</p>}
//           {settingsSuccess && <p className="text-green-500 mb-4 p-3 bg-green-100 rounded">{settingsSuccess}</p>}
//           <form onSubmit={handlePasswordSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">Old Password</label>
//               <input
//                 type="password"
//                 id="oldPassword"
//                 name="oldPassword"
//                 required
//                 value={passwordForm.oldPassword}
//                 onChange={handlePasswordChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
//               />
//             </div>
//             <div>
//               <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
//               <input
//                 type="password"
//                 id="newPassword"
//                 name="newPassword"
//                 required
//                 value={passwordForm.newPassword}
//                 onChange={handlePasswordChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
//               />
//             </div>
//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 required
//                 value={passwordForm.confirmPassword}
//                 onChange={handlePasswordChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={isSettingsLoading}
//               className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#DD4F05] hover:bg-[#C04604] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DD4F05] disabled:opacity-50 transition duration-150 ease-in-out"
//             >
//               {isSettingsLoading ? 'Changing Password...' : 'Change Password'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsComponent;

import React, { useState, useEffect } from 'react';
import { UserPlus, Settings, Lock, Mail, User, Key, CheckCircle, AlertCircle } from 'lucide-react'; // Import Lucide icons

interface User {
  email: string;
  name: string;
  role: string;
}

const SettingsComponent = () => {
  // State for New User Form
  const [newUserFormData, setNewUserFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: ''
  });
  const [newUserError, setNewUserError] = useState('');
  const [newUserSuccess, setNewUserSuccess] = useState(false);
  const [isNewUserLoading, setIsNewUserLoading] = useState(false);

  // State for Settings
  const [user, setUser] = useState<User | null>(null);
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [settingsError, setSettingsError] = useState('');
  const [settingsSuccess, setSettingsSuccess] = useState('');
  const [isSettingsLoading, setIsSettingsLoading] = useState(false);

  const BASE_URL = 'http://localhost:3000';

  // Fetch user data when component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const tokenObjectString = localStorage.getItem('token');
    if (!tokenObjectString) {
      throw new Error('No token found. Please log in again.');
    }
    const tokenObject = JSON.parse(tokenObjectString);
    const token = tokenObject.token;

    try {
      const response = await fetch(`${BASE_URL}/api/user`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch user data');
      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      setSettingsError('Failed to load user data');
    }
  };

  const handleNewUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewUserFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNewUserSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsNewUserLoading(true);
    setNewUserError('');
    setNewUserSuccess(false);

    try {
      const tokenObjectString = localStorage.getItem('token');
      if (!tokenObjectString) {
        throw new Error('No token found. Please log in again.');
      }
      const tokenObject = JSON.parse(tokenObjectString);
      const token = tokenObject.token;

      const response = await fetch(`${BASE_URL}/api/create-users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newUserFormData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create user');
      }

      setNewUserSuccess(true);
      setNewUserFormData({ email: '', password: '', name: '', role: '' });
    } catch (err) {
      setNewUserError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsNewUserLoading(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSettingsLoading(true);
    setSettingsError('');
    setSettingsSuccess('');

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setSettingsError('New passwords do not match');
      setIsSettingsLoading(false);
      return;
    }

    try {
      const tokenObjectString = localStorage.getItem('token');
      if (!tokenObjectString) {
        throw new Error('No token found. Please log in again.');
      }
      const tokenObject = JSON.parse(tokenObjectString);
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
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to change password');
      }

      setSettingsSuccess('Password changed successfully');
      setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      setSettingsError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSettingsLoading(false);
    }
  };

  if (!user) {
    return <div className="text-center">Loading user data...</div>;
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* New User Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex-1">
          <div className="flex items-center gap-3 mb-6">
            <UserPlus className="w-8 h-8 text-black" />
            <h2 className="text-lg font-semibold text-black">Create New User</h2>
          </div>
          {newUserError && (
            <div className="flex items-center gap-2 bg-red-100 p-3 rounded-md mb-4">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-500">{newUserError}</p>
            </div>
          )}
          {newUserSuccess && (
            <div className="flex items-center gap-2 bg-green-100 p-3 rounded-md mb-4">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <p className="text-green-500">User created successfully!</p>
            </div>
          )}
          <form onSubmit={handleNewUserSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={newUserFormData.email}
                onChange={handleNewUserChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Key className="w-4 h-4 text-gray-500" />
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={newUserFormData.password}
                onChange={handleNewUserChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <User className="w-4 h-4 text-gray-500" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newUserFormData.name}
                onChange={handleNewUserChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Settings className="w-4 h-4 text-gray-500" />
                Role
              </label>
              <select
                id="role"
                name="role"
                value={newUserFormData.role}
                onChange={handleNewUserChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD4F05] focus:border-transparent"
              >
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={isNewUserLoading}
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#DD4F05] hover:bg-[#C04604] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DD4F05] disabled:opacity-50 transition duration-150 ease-in-out flex items-center justify-center gap-2"
            >
              {isNewUserLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <UserPlus className="w-4 h-4" />
              )}
              {isNewUserLoading ? 'Creating...' : 'Create User'}
            </button>
          </form>
        </div>

        {/* User Settings */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex-1">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-8 h-8 text-black" />
            <h2 className="text-lg font-semibold text-black">User Settings</h2>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">User Information</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <strong>Email:</strong> {user.email}
              </p>
              <p className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <strong>Name:</strong> {user.name}
              </p>
              <p className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-gray-500" />
                <strong>Role:</strong> {user.role}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Change Password</h3>
            {settingsError && (
              <div className="flex items-center gap-2 bg-red-100 p-3 rounded-md mb-4">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <p className="text-red-500">{settingsError}</p>
              </div>
            )}
            {settingsSuccess && (
              <div className="flex items-center gap-2 bg-green-100 p-3 rounded-md mb-4">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <p className="text-green-500">{settingsSuccess}</p>
              </div>
            )}
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-gray-500" />
                  Old Password
                </label>
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
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <Key className="w-4 h-4 text-gray-500" />
                  New Password
                </label>
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
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <Key className="w-4 h-4 text-gray-500" />
                  Confirm New Password
                </label>
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
                disabled={isSettingsLoading}
                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#DD4F05] hover:bg-[#C04604] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DD4F05] disabled:opacity-50 transition duration-150 ease-in-out flex items-center justify-center gap-2"
              >
                {isSettingsLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Lock className="w-4 h-4" />
                )}
                {isSettingsLoading ? 'Changing Password...' : 'Change Password'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;