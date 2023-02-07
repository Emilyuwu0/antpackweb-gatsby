import React from 'react';
import { graphql, Link } from 'gatsby';

export default function Projects({ data }) {
  const projects = data.projects.nodes;
  return (
    <>
      <h1>Vistas proyectos</h1>
      <div>
        {projects.map((project) => (
          <Link to={project.frontmatter.path} key={project.id}>
            <h1>{project.frontmatter.title}</h1>
          </Link>
        ))}
      </div>
    </>
  );
}

export const query = graphql`
  query ProjectsPagesIndex {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          subtitle
          path
        }
      }
    }
  }
`;
