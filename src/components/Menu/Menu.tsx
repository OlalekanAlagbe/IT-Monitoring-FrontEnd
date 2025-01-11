
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Menu.css';
import { menu } from '../../data'; // Adjust the path to your menu data file

const Menu = () => {
  // Get the current route using useLocation
  const location = useLocation();
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="menu">
      {/* Iterate over the menu sections */}
      <div className="sideBarLogo">
        <img className='sideBarImg' src="gtblogo.png" alt="" />
        <span className='logoText'>Tech <br /> Pulse</span>
      </div>
      {menu.map((section) => (
        <div key={section.id} className="item">
          {/* Render the section title */}
          {/* <span className="title">{section.title.toUpperCase()}</span> */}
          {/* Iterate over listItems */}
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
        {/* <span className="title">LOGOUT</span> */}
        <div className="listItem" onClick={handleLogout}>
          <img className="img" src="logout.svg" alt="Logout" /> {/* Replace with your logout icon */}
          <span className="listItemTitle">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
