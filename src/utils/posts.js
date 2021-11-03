/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
export const getPostsByCategory = (posts, categoryName) => {

  if (categoryName === 'Accueil') {
    return posts;
  }
  
  return posts.filter(
    (post) => post.category === categoryName,
  );
};
