import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Post = ({
  category, excerpt, title, className,
}) => {
  // si className = true, alors on passe en mode zen, sinon on reste en mode post
  const classType = className ? 'post-zen' : 'post';

  return (
    <article className={classType}>
      <h2 className={`${ classType }-title`}>{title}</h2>
      <div className={`${ classType }-category`}>{category}</div>
      <p className={`${ classType }-excerpt`}>{excerpt}</p>
    </article>
  );
};

Post.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  className: PropTypes.bool.isRequired,
};

export default React.memo(Post);
