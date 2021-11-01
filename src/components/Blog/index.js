import React from 'react';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant
class Blog extends React.PureComponent {

  state = {
    className: 'post-zen', 
  }

  render() {

    console.log(categoriesData);
    console.log(postsData); 

    const { className } = this.state; 

    return (
      <div className="blog">
        <Header categoriesData={categoriesData}/>
        <Posts postsData={postsData} className={className}/>
        <Footer />
      </div>
    );
  }

};

// == Export
export default Blog;
