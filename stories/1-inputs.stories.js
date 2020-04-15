import { html } from 'lit-html';
import '../lib/input/text-input/text-input.js';
import '../lib/input/number-input/number-input.js';
import '../lib/input/email-input/email-input.js';
import '../lib/input/password-input/password-input.js';

export default {
  title: 'Input elements',
};

export const TextInput = () =>
  html`
    <p>Normal Text Input</p>
    <simplr-text-input label="Label"></simplr-text-input>
    <button onclick="console.log(document.querySelector('simplr-text-input').getValue())">
      Console log value
    </button>

    <p>Input with icon</p>
    <simplr-text-input label="Label" icon="cancel"></simplr-text-input>

    <p>Input with icon (Trailing)</p>
    <simplr-text-input label="Label" iconTrailing="cancel"></simplr-text-input>

    <p>Required input</p>
    <simplr-text-input label="Label" required></simplr-text-input>

    <p>Required input ( Custom error message )</p>
    <simplr-text-input
      label="Label"
      required
      errorMessage="${'This input is not valid'}"
    ></simplr-text-input>

    <p>Disabled input</p>
    <simplr-text-input label="Label" ?disabled="${true}"></simplr-text-input>

    <p>Fullwidth input</p>
    <simplr-text-input label="Label" ?fullWidth="${true}"></simplr-text-input>

    <p>Character counter input</p>
    <simplr-text-input label="Label" ?charCounter="${true}" maxLength="255"></simplr-text-input>

    <p>Placeholder</p>
    <simplr-text-input label="Label" placeHolder="Placeholder"></simplr-text-input>

    <p>Helper Text</p>
    <simplr-text-input
      label="Label"
      helperText="I'm here to help"
      ?helperPersistent="${true}"
    ></simplr-text-input>

    <p>Helper Text (disappearing)</p>
    <simplr-text-input label="Label" helperText="${"I'm here to help"}"></simplr-text-input>
  `;

export const NumberInput = () => html`
  <p>Number input</p>
  <simplr-number-input label="Label"></simplr-number-input>

  <p>
    Number input uses the same properties as the text input. Refer to Text Input for more examples
  </p>
`;

export const EmailInput = () => html`
  <p>Email input</p>
  <simplr-email-input label="Label"></simplr-email-input>

  <p>
    Email input uses the same properties as the text input. Refer to Text Input for more examples
  </p>
`;

export const PasswordInput = () => html`
  <p>Password input</p>
  <simplr-password-input label="Label"></simplr-password-input>

  <p>
    Password input uses the same properties as the text input. Refer to Text Input for more examples
  </p>
`;
