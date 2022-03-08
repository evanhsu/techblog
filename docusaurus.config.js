// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Field Notes',
  tagline: 'Software engineering notes from the field',
  url: 'https://smirksoftware.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'evanhsu', // Usually your GitHub org/user name.
  projectName: 'techblog', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/evanhsu/techblog/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/evanhsu/techblog/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'FieldNotes',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          //   {
          //     type: 'doc',
          //     docId: 'intro',
          //     position: 'left',
          //     label: 'Tutorial',
          //   },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/evanhsu/techblog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          //   {
          //     title: 'Docs',
          //     items: [
          //       {
          //         label: 'Coming soon™',
          //         to: '/',
          //       },
          //     ],
          //   },
          {
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/users/1986927/evanhsu?tab=profile',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/evan-hsu/',
          },
          {
            label: 'Github Profile',
            href: 'https://github.com/evanhsu',
          },
        ],
        copyright: `<small>Copyright © ${new Date().getFullYear()} Smirk Software.<br />Thanks, Docusaurus.</small>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
