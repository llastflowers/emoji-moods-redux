import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import reducer from '../reducers/emojiActionReducer';
import { getFace } from '../selectors/moodSelectors';

const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
];

export default function Moods() {
  const [state, dispatch] = useReducer(reducer,
    { coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0 });
  const face = getFace(state);
  return (
    <>
      <Controls actions={actions} handleSelection={(name) => dispatch({ type: name })}/>
      <Face emoji={face} />
    </>
  );
}
