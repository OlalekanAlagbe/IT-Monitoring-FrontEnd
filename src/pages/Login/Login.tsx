// import './Login.css';
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const BASE_URL = 'http://localhost:3000'; // Ensure 'http://' is present

//   // Handle login functionality
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${BASE_URL}/api/auth/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
//         localStorage.setItem('token', JSON.stringify({ token: data.token, expirationTime }));
//         setTimeout(() => navigate('/'), 100);
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (err) {
//       setError('Login failed. Please try again.');
//     }
//   };

//   // Check token expiration on component mount
//   useEffect(() => {
//     const tokenData = JSON.parse(localStorage.getItem('token'));
//     if (tokenData) {
//       const { expirationTime } = tokenData;
//       if (new Date().getTime() > expirationTime) {
//         localStorage.removeItem('token'); // Remove expired token
//         navigate('/login'); // Redirect to login
//       }
//     }
//   }, [navigate]);

//   return (
//     <div className="login-container">
//       <div className="second-login-container">
//         <div className="login-image-container flex items-center justify-center h-full">
//           <img className="login-image h-[600px] w-auto" src="trackstatistics.png" alt="" />
//         </div>
//         <div className="login-content">
//           <div className="logo-container">
//             <img src="gtblogo.png" alt="GTCO Tech Pulse" className="logo rounded-[5px]" />
//           </div>

//           <h1>Welcome Back</h1>
//           <p className="subtitle">Please input your details to proceed</p>

//           <form className="login-form" onSubmit={handleLogin}>
//             <div className="input-group">
//               <svg className="input-icon" viewBox="0 0 24 24" width="24" height="24">
//                 <path fill="none" d="M0 0h24v24H0z" />
//                 <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" fill="rgba(255,255,255,0.7)" />
//               </svg>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="form-input"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 autoComplete="email"
//               />
//             </div>
//             <div className="input-group">
//               <svg className="input-icon" viewBox="0 0 24 24" width="24" height="24">
//                 <path fill="none" d="M0 0h24v24H0z" />
//                 <path d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 0 0 7 9v1h10z" fill="rgba(255,255,255,0.7)" />
//               </svg>
//               <input
//                 type="password"
//                 placeholder="Input your password"
//                 className="form-input"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="captcha-input">
//               <input
//                 type="text"
//                 placeholder="Type reCAPATCHA"
//                 className="form-input"
//               />
              
//             </div>

//             {error && (
//               <div className="text-red-500 text-sm text-center">{error}</div>
//             )}

//             <div className="form-options">
//               <label className="remember-me">
//                 <input type="checkbox" />
//                 <span>Remember me</span>
//               </label>
//               <a href="/forgot-password" className="forgot-password">
//                 Forgot Password?
//               </a>
//             </div>

//             <button type="submit" className="login-button">
//               Login
//             </button>
//           </form>

//           <p className="signup-prompt">
//             Don't have an account?{' '}
//             <a href="/signup" className="signup-link">
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import './Login.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react'; // Lucide loading spinner
import { toast, ToastContainer } from 'react-toastify'; // React Toast
import './Login.css'; // React Toast CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const BASE_URL = 'https://it-monitoingbackend.onrender.com';

  // Handle login functionality
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    setError(''); // Clear previous errors

    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
        localStorage.setItem('token', JSON.stringify({ token: data.token, expirationTime }));

        // Show success toast
        toast.success('Login successful!...', {
          autoClose: 1000,
          onClose: () => navigate('/'), // Redirect after toast closes
        });
      } else {
        setError('Invalid credentials');
        toast.error('Invalid credentials. Please try again.'); // Show error toast
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      toast.error('Login failed. Please try again.'); // Show error toast
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Check token expiration on component mount
  useEffect(() => {
    const tokenData = JSON.parse(localStorage.getItem('token'));
    if (tokenData) {
      const { expirationTime } = tokenData;
      if (new Date().getTime() > expirationTime) {
        localStorage.removeItem('token'); // Remove expired token
        navigate('/login'); // Redirect to login
      }
    }
  }, [navigate]);

  

  return (
    <div style={{animation: 'slideInFromTop 0.5s ease-out',}} className="login-container">
      <ToastContainer position="top-right" autoClose={2000} /> {/* React Toast container */}
      <div className="second-login-container">
        <div className="login-image-container flex items-center justify-center h-full">
          <img className="login-image h-[600px] w-auto" src="trackstatistics.png" alt="" />
        </div>
        <div className="login-content">
          <div className="logo-container">
            <img src="gtblogo.png" alt="GTCO Tech Pulse" className="logo rounded-[5px]" />
          </div>

          <h1>Welcome Back</h1>
          <p className="subtitle">Please input your details to proceed</p>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <svg className="input-icon" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" fill="rgba(255,255,255,0.7)" />
              </svg>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
            <div className="input-group">
              <svg className="input-icon" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 0 0 7 9v1h10z" fill="rgba(255,255,255,0.7)" />
              </svg>
              <input
                type="password"
                placeholder="Input your password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="captcha-input">
              <input
                type="text"
                placeholder="Type reCAPATCHA"
                className="form-input"
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="animate-spin h-5 w-5 mx-auto" /> // Lucide spinner
              ) : (
                'Login'
              )}
            </button>
          </form>

          <p className="signup-prompt">
            Don't have an account?{' '}
            <a href="/signup" className="signup-link">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
