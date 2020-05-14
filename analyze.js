const fs = require('fs');
const { spawnSync } = require('child_process');

/**
 * The Web Component Analyzer is  a great tool, but it has its caveats.
 *
 * For MWC components, it seems to pick up some global properties, which in turn break the knobs
 * of storybook.
 *
 * This script was created to remove those properties by using a custom banned properties and
 * names lists.
 *
 */

const analyze = () => {
  const analyzeOutput = spawnSync('wca', ['analyze', 'lib', '--outFile', 'custom-elements.json']);
  console.log(analyzeOutput.stdout.toString());
};

analyze();

const customElementFile = 'custom-elements.json';
// MDC uses some global properties, which mess with the WCA analyzer.
// We remove those properties from the custom-elements.json to make knobs work.
const bannedProperties = ['MDC'];
const bannedNames = [
  'lineRippleFoundation',
  'elem',
  'floatingLabelFoundation',
  'charCounterFoundation',
];
const verbose = process.argv.includes('--verbose');

const green = '\x1b[32m';
const red = '\x1b[31m';

const log = (message, color, force) => {
  if (verbose || force) {
    if (!message) {
      console.log('');
      return;
    }
    console.log(color, `${color === green ? '\u2713 ' : ''}${message}`);
  }
};

const filterBannedPropsAndAttributes = (component, prop) => {
  if (!prop.type) {
    return true;
  }
  for (const bp of bannedProperties) {
    if (prop.type.includes(bp)) {
      log(
        `Component ${component.name} includes banned property ${prop.type}. Removing property.`,
        red,
      );
      return false;
    }
  }
  for (const bn of bannedNames) {
    if (prop.name === bn) {
      log(
        `Component ${component.name} includes property with name ${prop.name}. Removing property.`,
        red,
      );
      return false;
    }
  }
  return true;
};

const removeBannedPropertiesAndAttributes = component => {
  if (!component.properties) {
    return;
  }
  component.properties = component.properties.filter(prop =>
    filterBannedPropsAndAttributes(component, prop),
  );
  component.attributes = component.attributes.filter(attr =>
    filterBannedPropsAndAttributes(component, attr),
  );
};

const fixElements = () => {
  fs.readFile(customElementFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const json = JSON.parse(data);
    const components = json.tags;
    components.map(component => {
      log(`Analyzing ${component.name}`, green);
      removeBannedPropertiesAndAttributes(component);
      log();
    });
    fs.writeFile(customElementFile, JSON.stringify(json, null, 2), err => {
      if (err) {
        throw new Error(err);
      }
      log('Successfully saved to file with modifications.', green, true);
    });
  });
};

fixElements();
