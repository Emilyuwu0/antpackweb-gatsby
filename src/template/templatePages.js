import React from 'react';
import { graphql } from 'gatsby';
import './index.scss';
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="containerGeneral">
      <>
        <div className="containerSections">
          <span className="subtitlePageProduct colorWhiteText">
            {frontmatter.subtitle}
          </span>
          <span className="titlePageProduct colorWhiteText">
            {` `}
            <h1>{frontmatter.title}</h1>
          </span>
        </div>
        <div>
          <div className="gridColumns">
            <span>Back</span>
            <span>Scroll</span>
            <span>Next</span>
          </div>
        </div>
        <div>
          <div className="gridTwoColumns">
            {` `}
            <div className="columns">
              {` `}
              <span className="subtitlePageProduct ">
                {frontmatter.subtitleSectionTwo}
              </span>
              <span className="titleSubtitlePageProduct">
                {frontmatter.titleSectionTwo}
              </span>
              <span className="descriptionTitle divContainerTwo">
                {frontmatter.descriptionSectionTwo}
              </span>
            </div>
            <div className="complementaryText">
              <span>{frontmatter.complementarySectionTwo}</span>
            </div>
          </div>
        </div>
        <div className="divContainerImgAlone">img</div>
        <div className="divContainerThree">
          <span className="subtitlePageProduct">
            {/*     {data.subtitleSectionThree} */}
          </span>
          <span className="titleSubtitlePageProduct">
            {/*   {data.titleSectionThree} */}
          </span>
          <span className="descriptionTitle divContainerThree">
            {/*            {data.descriptionSectionThree} */}
          </span>
        </div>
        <div className="gridTwoColumns divContainerFour colorWhiteText">
          <div>
            <span className="subtitlePageProduct">
              {` `}
              {/*   {data.subtitleSectionFour} */}
            </span>
            <span className="titleSubtitlePageProduct">
              {` `}
              {/*      {data.titleSectionFour}{' '} */}
            </span>
          </div>
          <div>2</div>
        </div>
      </>
      );
    </div>
    /*   <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>uwu</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div> */
  );
}
export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        subtitleSectionTwo
        titleSectionTwo
        descriptionSectionTwo
        complementarySectionTwo
      }
    }
  }
`;
