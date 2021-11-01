import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Post = ({id, category, excerpt, title, className}) => (
  <article className="post">
    <h2 className="post-title">{title}</h2>
    <div className="post-category">{category}</div>
    <p className="post-excerpt">{excerpt}</p>
  </article>
);

Post.propTypes = {
  id: PropTypes.number.isRequired, 
  category: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  excerpt: PropTypes.string.isRequired, 
}

export default React.memo(Post);
