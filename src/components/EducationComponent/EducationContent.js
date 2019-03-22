import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

export default class EducationContent extends Component {
  render() {
    return (
      <Section>
        <Title message="West Marin Compost hopes that you will visit our website regularly to find out about events, workshops, articles, and videos." title="" />
        <EducationContentWrapper>
          <h2 style={{ paddingTop: '2rem' }}>Carbon Farming</h2>
          <p className="text">Increasing organic matter in our soils helps building healthy soils:</p>
          <ul style={{ fontWeight: 700, padding: '1rem 0' }}>
            <li>Conserve water</li>
            <li>Reduce erosion</li>
            <li>Improve soil structure</li>
            <li>Diverse, abundant microbial population</li>
            <li>Optimized nutrient management</li>
          </ul>

          <p className="text">Increased soil organic matter also takes CO2 from the atmosphere and sequesters it in the soil, therby helping to reverse climate change. Wise use of compost and mulches helps to carbon farm.</p>
          <p className="text">Carbon farming found its roots right here in Marin County through the <a href="https://www.marincarbonproject.org" target="_blank" rel="noopener noreferrer">Marin Carbon Project</a></p>
          <div style={{ margin: '1rem 0', position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
            <iframe style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }} title="Soil Story" width="560" height="315" src="https://www.youtube.com/embed/nvAoZ14cP7Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          </div>
          <h3 style={{ paddingTop: '2rem' }}>Getting started with carbon gardening</h3>
          <p className="text">We can also do our part of carbon sequestration in the backyard. The same principals apply. Here is an educational article that will get you going.</p>

          <StaticQuery
            query={graphql`
              query {
                climate: file(relativePath: { eq: "climate-friendly.png" }) {
                  childImageSharp {
                    fluid(maxWidth: 1600) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            `}
            render={data => <a href="http://www.igrowsonoma.org/wp-content/uploads/2015/09/climate-friendly-gardener-ucs.pdf" target="_blank" rel="noopener noreferrer">
              <Img style={{ margin: '0 auto 1rem auto' }} fluid={data.climate.childImageSharp.fluid} /></a>}
          />

          <Link to="/about" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>About</SectionButton>
          </Link>

        </EducationContentWrapper>
      </Section>
    )
  }
}

const EducationContentWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  max-width: 992px;
  ul {
    list-style-type: none;
  }
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }   
`