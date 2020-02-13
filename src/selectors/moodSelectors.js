export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '>:(';
  if(isHyper(state) && isHungry(state)) return 'O_O';
  if(isTired(state)) return '-_-';
  if(isHyper(state)) return '@_@';
  if(isEducated(state)) return 'O.O';
  if(isHungry(state)) return 'x_x';

  return 'OwO';
};
