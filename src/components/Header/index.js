import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({ categoriesData, toggleZenMode }) => (
  <header className="menu">
    <nav>
      {
      categoriesData.map(
        (category) => <a key={category.label} className="menu-link" href={category.route}>{category.label}</a>,
      )
      }
      {/* <a className="menu-link menu-link--selected" href="">Accueil</a> */}

      <button 
        className="menu-btn" 
        type="button"
        onClick={
          (event) => {
            console.log(event); 
            toggleZenMode(); 
          }
        }
        >
        Activer le mode zen
      </button>

    </nav>
  </header>
);

Header.propTypes = {
  categoriesData: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  toggleZenMode: PropTypes.func.isRequired, 
};

export default React.memo(Header);
