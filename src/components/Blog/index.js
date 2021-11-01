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
    className: false,
  }

  setClassName = (className) => {
    this.setState({ className });
  }

  toggleZenMode = () => {
    const { className } = this.state;

    this.setState({ className: !className });
   
  }

  render() {
    console.log(categoriesData);
    console.log(postsData);

    const { className } = this.state;

    return (
      <div className="blog">
        <Header categoriesData={categoriesData} toggleZenMode={this.toggleZenMode} />
        <Posts postsData={postsData} className={className} />
        <Footer />
      </div>
    );
  }
}

// == Export
export default Blog;
