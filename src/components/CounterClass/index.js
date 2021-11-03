import React from 'react'; 

class CounterClass extends React.Component {

// pour gérer une variable d'état (qui évolue et dont le rendu dépend):
// 1. on stocke cette variable dans le state

  // on a besoin d'une var d'état (il faut une valeur initiale)
  state = {
    count: 2, // 2. Donner une valeur initiale à la variable
  }

  // 3. avoir un moyen de modifier cette variable
  setCount = (newCount) => {
    this.setState({count: newCount}); 
  }

  // 
  render() {
    // 2. pouvoir lire la valeur courante de cette variable (notamment pour l'afficher)
    const { count } = this.state;
    return <button type="button" onClick= {() => this.setCount(count + 1)}>class {count}</button>;
  }
}

export default CounterClass; 
