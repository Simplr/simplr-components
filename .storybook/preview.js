import { addParameters, setCustomElements } from '@open-wc/demoing-storybook';

const _customElementsDefine = window.customElements.define;
window.customElements.define = (name, cl, conf) => {
  if (!customElements.get(name)) {
    _customElementsDefine.call(window.customElements, name, cl, conf);
  }
};

addParameters({
  docs: {
    iframeHeight: '200px',
  },
});

async function run() {
  const customElements = await (
    await fetch(new URL('../custom-elements.json', import.meta.url))
  ).json();

  setCustomElements(customElements);
}

run();
