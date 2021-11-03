import React from 'react';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import CounterClass from 'src/components/CounterClass';
import CounterFunc from 'src/components/CounterFunc'; 

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant
class Blog extends React.PureComponent {

  // className = false > mode avec class = .post
  // quand on clique sur le bouton, className devient vrai, et dans le composant Header, si className = true alors on met la classe .post-zen
  state = {
    className: false,
  }

  toggleZenMode = () => {
    const { className } = this.state;

    this.setState({ className: !className });
   
  }

  render() {
    // console.log(categoriesData);
    // console.log(postsData);

    const { className } = this.state;

    return (
      <div className="blog">
        <CounterClass/>
        <CounterFunc/>
        <Header categoriesData={categoriesData} toggleZenMode={this.toggleZenMode} />
        <Posts postsData={postsData} className={className} />
        <Footer />
      </div>
    );
  }
}

// == Export
export default Blog;
