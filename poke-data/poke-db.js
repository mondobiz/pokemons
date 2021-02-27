module.exports = {
    getAll
  };
  
  const pokemons = [
    {text: 'Bulbasaur'},
    {text: 'Charmander'},
    {text: 'Squirtle'}
  ];
      
  
  function getAll() {
      return pokemons;
  }