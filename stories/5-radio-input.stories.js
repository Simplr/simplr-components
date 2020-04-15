import { html } from 'lit-html';
import '../lib/input/radio-group/radio-group.js';

export default {
  title: 'Radio group',
};

const radioSelections = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2, checked: true },
  { label: 'Option 3', value: 3 },
  { label: 'Option 4', value: 4 },
];

export const RadioGroup = () => html`
  <p>Regular row of radio buttons</p>
  <simplr-radio-group name="inputs-one" .options="${radioSelections}"></simplr-radio-group>

  <p>Regular column of radio buttons</p>
  <simplr-radio-group
    name="inputs-two"
    .options="${radioSelections}"
    align="column"
  ></simplr-radio-group>
`;
