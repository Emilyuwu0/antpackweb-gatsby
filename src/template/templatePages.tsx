import React from 'react';
import { graphql, Link } from 'gatsby';
import './index.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const backgroundHeader = getImage(
    markdownRemark.frontmatter.backgroundHeaderProject?.childImageSharp,
  );
  return (
    <div className="containerGeneral">
      <>
        <div
          className="containerSections"
          style={{
            background: `url(${frontmatter.backgroundHeaderProject.publicURL})`,
            backgroundRepeat: ` no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <span className="subtitlePageProduct colorWhiteText">
            {frontmatter.subtitle}
          </span>
          <span className="titlePageProduct colorWhiteText">
            {` `}
            <h1>{frontmatter.title}</h1>
            {` `}

            {/*    <img
              src={frontmatter.backgroundHeaderProject.publicURL}
              alt={frontmatter.title}
            /> */}
          </span>
        </div>
        <div>
          <div className="gridColumns">
            <span>Back</span>
            <span>Scroll</span>
            <Link to={frontmatter.path}>Next</Link>
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
              <span className="colorTitles">
                {frontmatter.complementarySectionTwo}
              </span>
              <span className="listStyle complementaryText">
                {` `}
                {frontmatter.complementarySectionListItemOne}
              </span>
              <span className="listStyle complementaryText">
                {` `}
                {frontmatter.complementarySectionListItemTwo}
              </span>
              <span className="listStyle colorTitles">
                {` `}
                {frontmatter.complementarySectionListItemThree}
              </span>
              <span className="listStyle complementaryText">
                {frontmatter.complementarySectionListItemFour}
              </span>
              <span className="listStyle colorTitles">
                {frontmatter.complementarySectionListItemFive}
              </span>
              <span className="listStyle complementaryText">
                {frontmatter.complementarySectionListItemSix}
              </span>
            </div>
          </div>
        </div>
        <div className="divContainerImgAlone">img</div>
        <div className="divContainerThree">
          <span className="subtitlePageProduct">
            {frontmatter.subtitleSectionThree}
          </span>
          <span className="titleSubtitlePageProduct">
            {frontmatter.titleSectionThree}
          </span>
          <span className="descriptionTitle divContainerThree">
            {frontmatter.descriptionSectionThree}
          </span>
        </div>
        <div className="gridTwoColumns divContainerFour colorWhiteText">
          <div>
            <span className="subtitlePageProduct">
              {` `}
              {frontmatter.subtitleSectionFour}
            </span>
            <span className="titleSubtitlePageProduct">
              {` `}
              {frontmatter.titleSectionFour}
              {` `}
            </span>
          </div>
          <div>2</div>
        </div>
      </>
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
        complementarySectionListItemOne
        complementarySectionListItemTwo
        complementarySectionListItemThree
        complementarySectionListItemFour
        complementarySectionListItemFive
        complementarySectionListItemSix
        subtitleSectionThree
        titleSectionThree
        descriptionSectionThree
        subtitleSectionFour
        titleSectionFour
        backgroundHeaderProject {
          childImageSharp {
            id
          }
          size
          name
          publicURL
          relativePath
        }
      }
    }
  }
`;
