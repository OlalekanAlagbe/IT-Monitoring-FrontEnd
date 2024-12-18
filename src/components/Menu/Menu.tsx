import { Link } from 'react-router-dom';
import './Menu.css';
import { menu } from '../../data'; // Adjust the path to your menu data file

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((section) => (
        <div key={section.id} className="item">
          {/* Render the section title */}
          <span className="title">{section.title.toUpperCase()}</span>
          {/* Iterate over listItems */}
          {section.listItems.map((listItem) => (
            <Link key={listItem.id} to={listItem.url} className="listItem">
              <img src={`/${listItem.icon}`} alt={listItem.title} />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
