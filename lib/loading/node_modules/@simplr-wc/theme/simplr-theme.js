const defaults = {
  primary: {
    main: '#02a9ee',
    light: '#66daff',
    dark: '#007abb',
  },
  secondary: {
    main: '#e0001e',
    light: '#ff5448',
    dark: '#a50000',
  },
};

class SimplrThemeCreator {
  static init(styles) {
    let setStyles = styles;
    if (!setStyles) {
      setStyles = defaults;
    }
    SimplrThemeCreator._instance = new SimplrThemeCreator(setStyles);
  }

  static getInstance() {
    if (!SimplrThemeCreator._instance) {
      SimplrThemeCreator.init();
    }
    return SimplrThemeCreator._instance;
  }

  constructor(setStyles) {
    this.styles = setStyles;
    this.setProperty(defaults);
  }

  setProperty(styleCategory, styleKey) {
    Object.keys(styleCategory).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(styleCategory, key)) {
        return;
      }
      if (typeof styleCategory[key] === 'object') {
        this.setProperty(styleCategory[key], key);
      } else {
        if (typeof this.styles[styleKey] === 'undefined') {
          this.styles[styleKey] = {};
        }
        if (typeof this.styles[styleKey][key] === 'undefined') {
          this.styles[styleKey][key] = defaults[styleKey][key];
        }
      }
    });
  }
}

const SimplrThemeInit = styles => SimplrThemeCreator.init(styles);
export default SimplrThemeInit;

export const SimplrTheme = () => SimplrThemeCreator.getInstance().styles;
