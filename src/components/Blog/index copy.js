// on importe le hook d'état useState; c'est react qui nous le fournit
import {useState} from 'react'; 

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant
const Blog = () => {
  console.log(categoriesData);
  console.log(postsData);

  // on crée une variable d'état pour stocker l'information : est-on en zen mode?
  // on choisit la variable initiale, ici faux, on démarre pas en zen mode
  // on récupère le moyen de lire cette info : isZenMode (nom au choix)
  // on récupère le moyen de modifier cette info : setIsZenMode (nom au choix, par convention set...)
  const [isZenMode, setIsZenMode] = useState(false);


  return (
    <div className="blog">
      <Header categories={categoriesData} isZenMode={isZenMode} setIsZenMode={setIsZenMode} />
      <Posts posts={postsData} isZenMode={isZenMode}/>
      <Footer />
    </div>
  );
};

// == Export
export default Blog;
