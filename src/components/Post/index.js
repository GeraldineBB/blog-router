import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Post = ({
  id, category, excerpt, title, className,
}) => {
  const classType = className ? 'post-zen' : 'post';

  return (
    <article className={classType}>
      <h2 className="post-title">{title}</h2>
      <div className="post-category">{category}</div>
      <p className="post-excerpt">{excerpt}</p>
    </article>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  className: PropTypes.bool.isRequired,
};

export default React.memo(Post);
