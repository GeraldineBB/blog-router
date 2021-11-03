import { useState } from 'react';

const CounterFunc = () => {
  // Quand on a besoin d'une variable d'état, grâce au hook useState
  // plus besoin de passer en classe.
  // Avec une seule ligne de code, on récupère tout ce dont on a besoin :
  // le moyen d'accéder en lecture à la variable d'état, ici : count
  // le moyen de modifier cette variable d'état : setCount
  // le moyen de définir la valeur initiale de notre variable d'état : 0
  const [count, setCount] = useState(0);
  // on peut imaginer gérer plusieurs variables d'état dans un composant,
  // il suffit d'appeler plusieurs fois useState !
  // const [label, setLabel] = useState('');

  return (
    <button type="button" onClick={() => {setCount(count + 1)}}>func {count}</button>
  );
};

export default CounterFunc;
