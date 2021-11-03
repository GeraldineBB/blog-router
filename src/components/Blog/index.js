// on importe le hook d'état useState; c'est react qui nous le fournit
import { useState } from 'react';
import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';
import Spinner from 'src/components/Spinner';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import { getPostsByCategory } from '../../utils/posts';
import './styles.scss';

// == Composant
const Blog = () => {
  // console.log(categoriesData);
  // console.log(postsData);

  // on crée une variable d'état pour stocker l'information : est on en zen mode ?
  // on choisit le valeur initiale, ici faux, on ne démarre pas en zen mode
  // on récupère le moyen de lire cette information : isZenMode (nom au choix)
  // on récupère le moyen de modifier cette  information : setIsZenMode (nom au choix, par convention set...)
  const [isZenMode, setIsZenMode] = useState(false);

  // on prépare une variable d'état pour ranger nos posts
  // ils vont évoluer : au début pas de post puis une fois récupérés on aura des posts
  const [posts, setPosts] = useState([]);

  // on prépare une variable d'état pour gérer les loading
  // grâce à 2 vues conditionnelle, on affchera :
  // - le spinner si on est en train de charger
  // - le switch si on n'est pas en train de charger
  const [loading, setLoading] = useState(false);

  // cette fonction est appelée au click sur le bouton d chargement,
  // c'est ici qu'on gérera l'évolution de notre state et l'appel à l'API
  const loadPosts = () => {
    console.log('je vais charge les posts');
    setLoading(true);
    // il va falloir aller récupérer la liste des posts depuis l'api (fetch)
    // componentDidMount(){
    //   fetch('https://oclock-open-apis.vercel.app/api/blog/posts')
    //   .then (response => response.json());
    // }

    const loadingStop = () => new Promise((setLoading) => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });

    const axios = require('axios');

    async function getPosts() {

      const response = await axios.get('https://oclock-open-apis.vercel.app/api/blog/posts'); 
      setPosts(response.data);
      await setLoading(false); 

    }
    // axios.get('https://oclock-open-apis.vercel.app/api/blog/posts')
    //   .then((response) => {
    //   // handle success
    //     console.log(response.data);
    //     // et les ranger dans le state (setPosts)
    //     setPosts(response.data);
    //   });

    // et enfin sortir de l'état loading
    getPosts(); 
  };

  // on crée une variable d'état pour les categories (bonus)
  const [categories, setCategories] = useState([]); 

  // const loadCategories = () => {

    const axios = require('axios');

    axios.get('https://oclock-open-apis.vercel.app/api/blog/categories')
      .then((response) => {
        console.log(response); 
        setCategories(response.data); 
      })
  // }

  // loadCategories(); 

  return (
    <div className="blog">
      <Header categories={categories} isZenMode={isZenMode} setIsZenMode={setIsZenMode} />
      <button
        type="button"
        onClick={() => {
          loadPosts();
        }}
      >load posts
      </button>
      {loading && <Spinner />}
      {
        /*
        Switch permet de faire en sorte que seuls les enfants
        de la première route ou du premier redirect du switch soit rendus
        */
      }
      {!loading && (
      <Switch>
        {
            categoriesData.map(
              (category) => (
                <Route key={category.route} path={category.route} exact>
                  <Posts
                    posts={getPostsByCategory(posts, category.label)}
                    isZenMode={isZenMode}
                    title={category.label}
                  />
                </Route>
              ),
            )
          }
        {
            /*
            Redirect permet de modifier l'url si l'url courante matche avec son from
            */
          }
        <Redirect from="/jquery" to="/autre" />
        {
            /*
            Si on voulait rediriger plusieur paths vers un nouveau :
            <Redirect from="{['/jquery', '/lodash']}" to="/autre" />
            */
          }
        {
            /*
            Une route est rendue seulement sit son path matche avecv l'url courante.
            Ici, on ne précise pas de path, le contenu de la route sera rendu quelle que soit l'url
            Précision: ici, nous sommes dans un Switch, pour que le contenu soit rendu, il faut
            qu'aucun des redirect / route precédent n'ai matchés
            */
          }
        <Route>
          <NotFound />
        </Route>
      </Switch>
      )}
      <Footer />
    </div>
  );
};

// == Export
export default React.memo(Blog);
