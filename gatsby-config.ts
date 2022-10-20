import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 98,
          formats: ['auto', 'webp', 'avif'],
          breakpoints: [640, 769, 1024, 1366, 1920],
          backgroundColor: 'transparent'
        }
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      },
      __key: 'images'
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: "$env: " + process.env.NODE_ENV + ";",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
  ],
  jsxRuntime: `automatic`,
};

export default config;
