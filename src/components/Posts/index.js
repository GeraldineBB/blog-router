import PropTypes from 'prop-types';
import Post from 'src/components/Post';

import './styles.scss';

const Posts = ({ posts, isZenMode, title }) => {
  const className = isZenMode ? 'posts posts--zen' : 'posts';
  return (
    <main className={className}>
      <h1 className="posts-title">{title === 'Accueil' ? 'Dev of thrones' : title}</h1>
      <div className="posts-list">
        {
        /* grâce à ...post on transmet l'ensemble des propriétés de l'objet post au
        composant Post dans des props de même nom */
        }
        {
          posts.map(
            (post) => (
              <Post
                key={post.id}
                {...post}
              />
            ),
          )
        }
      </div>
    </main>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  isZenMode: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired, 
};

export default Posts;
