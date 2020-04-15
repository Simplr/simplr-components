import { html } from 'lit-html';
import '../lib/button/simplr-button.js';

export default {
  title: 'Button elements',
};

export const PrimaryButton = () => html`
  <p>Normal button</p>
  <simplr-button label="Button"></simplr-button>

  <p>Icon button</p>
  <simplr-button label="Button" icon="cancel"></simplr-button>

  <p>Icon button (Trailing)</p>
  <simplr-button label="Button" icon="cancel" trailingIcon></simplr-button>

  <p>Primary button</p>
  <simplr-button label="Button" icon="code" primary></simplr-button>
  <simplr-button label="Button" icon="code" primary raised></simplr-button>

  <p>Secondary button</p>
  <simplr-button label="Button" icon="code" secondary></simplr-button>
  <simplr-button label="Button" icon="code" secondary raised></simplr-button>

  <p>Custom color button</p>
  <simplr-button label="Button" icon="code"></simplr-button>
  <simplr-button label="Button" icon="code" raised></simplr-button>

  <p>Outlined button</p>
  <simplr-button label="Button" outlined></simplr-button>

  <p>Raised button</p>
  <simplr-button label="Button" raised></simplr-button>

  <p>Unelevated button</p>
  <simplr-button label="Button" unelevated></simplr-button>

  <p>Dense button</p>
  <simplr-button label="Button" dense></simplr-button>

  <p>Disabled button</p>
  <simplr-button label="Button" disabled></simplr-button>
`;
