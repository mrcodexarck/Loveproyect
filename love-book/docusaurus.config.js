// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nuestra Historia',
  tagline: 'Un libro virtual para mi amor',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ✅ Datos actualizados según tu GitHub: mrcodexarck / Loveproyect
  url: 'https://mrcodexarck.github.io',
  baseUrl: '/Loveproyect/',
  organizationName: 'mrcodexarck',
  projectName: 'Loveproyect',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // ✅ Movido aquí para evitar el warning de deprecación
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  // ✅ Evitamos el error de la carpeta "docs" eliminando el preset classic
  plugins: ['@docusaurus/plugin-content-pages'],
  themes: ['@docusaurus/theme-classic'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        
        items: [
          {
            to: '/libro',
            label: '📖 Nuestro Libro',
            position: 'left',
          },
          {
            // ✅ Enlace a tu repositorio actualizado
            href: 'https://github.com/mrcodexarck/Loveproyect',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
        ],
        copyright: `Hecho con ❤️ para mi amor · ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;