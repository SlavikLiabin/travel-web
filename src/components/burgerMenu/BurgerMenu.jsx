import React, {useState} from 'react';
import './style.css'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="burger-menu-btn">
        <span className="burger-menu-icon">
          <span className="burger-menu-line">-</span>
          <span className="burger-menu-line">-</span>
          <span className="burger-menu-line">-</span>
        </span>
      </button>
      {isOpen && (
        <div className="burger-menu-container">
          <ul className="burger-menu-list">
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;