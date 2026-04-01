import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Life Simulator Reloaded Wiki',
  tagline: 'The ultimate guide to Life Simulator Reloaded',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://acg.software',
  baseUrl: '/docs/',

  organizationName: 'acanguven',
  projectName: 'life-simulator-wiki',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr', 'es', 'pt-BR', 'de'],
    localeConfigs: {
      en: {label: 'English', direction: 'ltr'},
      tr: {label: 'Türkçe', direction: 'ltr'},
      es: {label: 'Español', direction: 'ltr'},
      'pt-BR': {label: 'Português (Brasil)', direction: 'ltr'},
      de: {label: 'Deutsch', direction: 'ltr'},
    },
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'tr', 'es', 'pt', 'de'],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchBarShortcutHint: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
      disableSwitch: true,
    },
    navbar: {
      title: 'Life Simulator Wiki',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wikiSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Life Simulator Reloaded`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
