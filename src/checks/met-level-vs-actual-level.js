module.exports = {
  description: "A Pokémon's met level must not be higher than its current level.",
  test (pkmn) {
    return pkmn.levelMet <= pkmn.level;
  }
};
