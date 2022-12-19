//jshint esversion:6

const pokemon = require('pokemon');



var myPokemon =pokemon.random();

const randomTeam = [];

for(var i =0; i <6;i++){

    randomTeam[i]= pokemon.random();
}

console.log("Your Team: "+ randomTeam);
