/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class CounterClass extends React.Component {
  // pour gérer une variable d'état (qui évolue et dont le rendu dépend)
  // 1 - on stocke cette variable dans le state
  state = {
    count: 0, // 2 - donner une valeur initiale à la variable
  }

  // 4 - Avoir un moyen de modifier cette variable
  setCount = (newCount) => {
    this.setState({ count: newCount });
  }

  render() {
    // 2 - pouvoir lire la valeur courante de cette variable (notamment pour l'afficher)
    const { count } = this.state;
    return <button type="button" onClick={() => this.setCount(count + 1)}>class {count}</button>;
  }
}

export default CounterClass;
