import type { GatsbyNode } from 'gatsby';
import { act } from 'react-dom/test-utils';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

/* const path = require(`path`);
const postTemplate = path.resolve(`src/template/templatePages.tsx`);
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPages({
      path: node.frontmatter.path,
      component: postTemplate,
      context: { path: node.frontmatter.path }, // additional data can be passed via context
    });
    console.log(path);
  });
}; */

const path = require(`path`);
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/template/templateProjects.tsx`);
  return graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: { path: node.frontmatter.path }, // additional data can be passed via context
      });
    });
  });
};
