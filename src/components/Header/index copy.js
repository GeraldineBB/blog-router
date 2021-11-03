import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({ categories, isZenMode, setIsZenMode }) => {
  const labelZenMode = isZenMode ? 'Désactiver le mode Zen' : 'Activer le mode zen';

  // ici le zen mode correspondra au bon mode affiché (// debug) 
  console.log("isZenMode au moment du render", isZenMode);

  return (
    <header className="menu">
      <nav>
        {
        categories.map(
          (category) => (
            <a
              key={category.route}
              className="menu-link menu-link--selected"
              href={category.route}
            >
              {category.label}
            </a>
          ),
        )
      }
        <button
          className="menu-btn"
          type="button"
          onClick={
          () => {
            // ici on demande à ce que la variable d'état soit modifiée 
            // cela provoque un nouveau rendu
            // et c'est seulement dans ce nouveau rendu qu'on pourra 
            // accéder à la nouvelle valeur de la variable d'état 
            // décalage du coup entre ce qu'on voit et l'état dans debug 
            setIsZenMode(!isZenMode);
            console.log(isZenMode); 
          }
      }
        >
          {labelZenMode}
        </button>
      </nav>
    </header>
  );
};

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isZenMode: PropTypes.bool.isRequired,
  setIsZenMode: PropTypes.func.isRequired,
};

export default Header;
