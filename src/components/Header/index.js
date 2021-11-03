import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = ({ categories, isZenMode, setIsZenMode }) => {
  const labelZenMode = isZenMode ? 'Désactiver le mode zen' : 'Activer le mode zen';
  console.log('isZenMode au moment du render', isZenMode);
  return (
    <header className="menu">
      <nav>
        {
          /*
          Au click sur un navlink, on navigue vers l'url définie dans la prop to
          Un NavLink réagit si l'url courante matche avec sa prop to en ajoutant
          une classe (active par défaut ou la classe définie par sa prop activeClassName sinon)
          */
        }
        {
          categories.map(
            (category) => (
              <NavLink
                key={category.route}
                className="menu-link"
                to={category.route}
                activeClassName="menu-link--selected"
                exact
              >
                {category.label}
              </NavLink>
            ),
          )
        }
        <button
          className="menu-btn"
          type="button"
          onClick={
            () => {
              // console.log('je veux changer le zen mode');
              // Ici, on demande à ce que la variable d'état soit modifiée
              // cela provoquera un nouveau rendu
              // et c'est seulement dans ce nouveau rendu qu'on pourra
              // accéder à la nouvelle valeur de la variable d'état
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
