
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './Menu.css';
// import { menu } from '../../data'; // Adjust the path to your menu data file

// const Menu = () => {
//   // Get the current route using useLocation
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Handle logout functionality
//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear token from localStorage
//     navigate('/login'); // Redirect to the login page
//   };

//   return (
//     <div className="menu">
//       {/* Iterate over the menu sections */}
//       <div className="sideBarLogo">
//         <img className='sideBarImg' src="gtblogo.png" alt="" />
//         <span className='logoText'>Tech <br /> Pulse</span>
//       </div>
//       {menu.map((section) => (
//         <div key={section.id} className="item">
//           {/* Render the section title */}
//           {/* <span className="title">{section.title.toUpperCase()}</span> */}
//           {/* Iterate over listItems */}
//           {section.listItems.map((listItem) => (
//             <Link
//               key={listItem.id}
//               to={listItem.url}
//               className={`listItem ${location.pathname === listItem.url ? 'active' : ''}`}
//             >
//               <img className="img" src={`/${listItem.icon}`} alt={listItem.title} />
//               <span className="listItemTitle">{listItem.title}</span>
//             </Link>
//           ))}
//         </div>
//       ))}

//       {/* Add a separate div for logout functionality */}
//       <div className="item">
//         {/* <span className="title">LOGOUT</span> */}
//         <div className="listItem" onClick={handleLogout}>
//           <img className="img" src="logout.svg" alt="Logout" /> {/* Replace with your logout icon */}
//           <span className="listItemTitle">Logout</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;



import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Menu.css';
import { menu } from '../../data'; // Adjust the path to your menu data file

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    navigate('/login'); // Redirect to the login page
  };

  // Open the logout confirmation modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the logout confirmation modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="menu">
      {/* Iterate over the menu sections */}
      <div className="sideBarLogo">
        <img className="sideBarImg" src="gtblogo.png" alt="" />
        <span className="logoText">Tech <br /> Pulse</span>
      </div>
      {menu.map((section) => (
        <div key={section.id} className="item">
          {/* Render the section title */}
          {section.listItems.map((listItem) => (
            <Link
              key={listItem.id}
              to={listItem.url}
              className={`listItem ${location.pathname === listItem.url ? 'active' : ''}`}
            >
              <img className="img" src={`/${listItem.icon}`} alt={listItem.title} />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}

      {/* Add a separate div for logout functionality */}
      <div className="item">
        <div className="listItem" onClick={openModal}>
          <img className="img" src="logout.svg" alt="Logout" /> {/* Replace with your logout icon */}
          <span className="listItemTitle">Logout</span>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Confirm Logout</h3>
              <button className="close-button" onClick={closeModal}>
                &times; {/* X icon to close the modal */}
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to logout?</p>
            </div>
            <div className="modal-footer">
              <button className="modal-button cancel-button" onClick={closeModal}>
                No
              </button>
              <button className="modal-button confirm-button" onClick={handleLogout}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;