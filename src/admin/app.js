import AuthLogo from './extensions/icon.png';
import MenuLogo from './extensions/icon.png';
import favicon from './extensions/favicon.ico';

const config = {
  auth: {
    logo: AuthLogo,
  },
 // Replace the favicon
  head: {
    favicon: favicon,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo: MenuLogo,
  },
  // Override or extend the theme
  theme: {
    // overwrite light theme properties
    light: {
      colors: {
        primary100: '#f6ecfc',
        primary200: '#e0c1f4',
        primary500: '#ac73e6',
        primary600: '#9736e8',
        primary700: '#8312d1',
        danger700: '#b72b1a'
      },
    },

    // overwrite dark theme properties
    dark: {
       // ...
    }
  },
  // Extend the translations
  translations: {
    fr: {
      'Auth.form.email.label': 'test',
      Users: 'Utilisateurs',
      City: 'CITY (FRENCH)',
      // Customize the label of the Content Manager table.
      Id: 'ID french',
    },
  },
 // Disable video tutorials
  tutorials: false,
 // Disable notifications about new Strapi releases
  notifications: { releases: false },
  // Add a new locale, other than 'en'
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
