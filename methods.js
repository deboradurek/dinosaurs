// Function that comprises comparison methods and facts
// Note: units are in pounds and inches
export const compareMethodsAndFact = (dino, human) => {
  const compareHeight = () => {
    const diffHeight = dino.height - human.height;
    if (diffHeight > 0) {
      return `${dino.species} are ${diffHeight} inches taller than ${human.name}.`;
    } else if (diffHeight < 0) {
      return `${dino.species} are ${Math.abs(diffHeight)} inches smaller than ${
        human.name
      }.`;
    }
    return `${dino.species} are as tall as ${human.name}.`;
  };

  const compareWeight = () => {
    const diffWeight = dino.weight - human.weight;
    if (diffWeight > 0) {
      return `${dino.species} are ${diffWeight} lbs heavier than ${human.name}.`;
    } else if (diffWeight < 0) {
      return `${dino.species} are ${Math.abs(diffWeight)} lbs lighter than ${
        human.name
      }.`;
    }
    return `${dino.species} are as heavy as ${human.name}.`;
  };

  const compareDiet = () => {
    if (dino.diet === human.diet) {
      return `${dino.species} have the same diet as ${human.name}. You are both ${dino.diet}es.`;
    }
    return `${dino.species} are ${dino.diet}, while ${human.name} is ${human.diet}.`;
  };

  const getFact = () => {
    return dino.fact;
  };

  return [compareHeight, compareWeight, compareDiet, getFact];
};
