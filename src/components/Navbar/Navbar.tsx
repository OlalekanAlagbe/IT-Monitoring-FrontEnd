// import { Search } from 'lucide-react';
// import './Navbar.css'
// const Navbar = () => {
//   return (
//     <header className="bg-white fixed top-0 left-0 w-full text-black flex items-center justify-between px-4 py-5 border-b">
//       <div className="text-lg font-medium">
        
//       </div>

//       <div className='flex items-center justify-between'> 
//         <div className="flex-1 max-w-md mx-10">
//           <div className="relative">
//             <Search className="absolute left-2.5 top-2.5 h-4 w-4" />
//             <input
//               type="search"
//               placeholder="Search"
//               className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//         </div>

//         <div className="flex items-center gap-3">
//           <div className="text-sm text-right">
//             <div className="font-medium">Alex Oxendine</div>
//             <div className="text-xs">Frontend Manager</div>
//           </div>
//           <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
//             <img 
//               src="" 
//               alt="User avatar"
//               className="h-8 w-8 rounded-full object-cover"
//               onError={(e) => {
//                 e.currentTarget.src = '';
//                 e.currentTarget.classList.add('hidden');
//                 e.currentTarget.parentElement?.classList.add('relative');
//                 e.currentTarget.parentElement?.classList.add('after:content-["AO"]');
//                 e.currentTarget.parentElement?.classList.add('after:text-gray-600');
//                 e.currentTarget.parentElement?.classList.add('after:text-sm');
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Navbar






// // return (
// //   <div className="navbar">
// //     <div className="logo">
// //       <span>IT Monitoring</span>
// //       <img className='nav-img' src="/gtblogo.png" alt="" />
// //     </div>
// //     {/* <div className="icons">
// //       <img src="/search.svg" alt="" className='icon' />
// //       <img src="/app.svg" alt="" className='icon' />
// //       <img src="/expand.svg" alt="" className='icon' />
// //       <div className="notification">
// //         <img src="notifications.svg" alt="" />
// //         <span>1</span>
// //       </div>
// //       <div className="user">
// //         <img src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s=" alt="" />
// //         <span>Jane</span>
// //       </div>
// //       <img src="/settings.svg" alt="" className='icon' />
// //     </div> */}
// //   </div>
// // )




import React, { useState, useEffect } from 'react';
import { Search, Sun, Moon, Cloud } from 'lucide-react';
import './Navbar.css';

const BASE_URL = 'https://it-monitoingbackend.onrender.com';

const Navbar = () => {
  const [user, setUser] = useState({ name: '' });
  const [settingsError, setSettingsError] = useState('');

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
      setUser(userData); // Assuming userData contains a 'name' field
    } catch (err) {
      setSettingsError('Failed to load user data');
    }
  };

  // Function to determine the time of day and return the appropriate greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const greeting = getGreeting();

  return (
    <header style={{animation: 'slideInFromTop 0.5s ease-out',}} className="bg-white fixed top-0 left-0 w-full text-black flex items-center justify-between px-4 py-5 border-b">
      <div className="text-lg font-medium">
        {/* Your logo or other content here */}
      </div>

      <div className='flex items-center justify-between'> 
        <div className="flex-1 max-w-md mx-10">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4" />
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-right">
            <div className="font-medium">Hello, {user.name}</div>
            <div className="text-xs flex items-center gap-1">
              {greeting === 'Good morning' && <Sun className="h-4 w-4" />}
              {greeting === 'Good afternoon' && <Cloud className="h-4 w-4" />}
              {greeting === 'Good evening' && <Moon className="h-4 w-4" />}
              <span>{greeting}</span>
            </div>
          </div>
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <img 
              src="profileImage.webp" 
              alt="User avatar"
              className="h-8 w-8 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '';
                e.currentTarget.classList.add('hidden');
                e.currentTarget.parentElement?.classList.add('relative');
                e.currentTarget.parentElement?.classList.add('after:content-["AO"]');
                e.currentTarget.parentElement?.classList.add('after:text-gray-600');
                e.currentTarget.parentElement?.classList.add('after:text-sm');
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
