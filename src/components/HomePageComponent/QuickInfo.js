import React, { Component } from 'react'
import { Section, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <QuickInfoWrapper>
          <h3 style={{ marginBottom: '2rem' }}>We will be closed Memorial Day and July 4</h3>
          <h2>Organics Recycling: Good for the environment</h2>
          <p className="text">Marin residents can drop off yard debris at West Marin Compost To avoid landfilling.  Organic matter in landfills creates methane, a potent greenhouse gas. As compost or mulch is is a valuable, much needed soil amendment that creates healthy soils:</p>
          <ul>
            <li>Improve soil structure</li>
            <li>Conserve water</li>
            <li>Reduce erosion</li>
            <li>Increase CEC (Cation Exchange Capacity)</li>
            <li>Optimized nutrient management</li>
            <li>Sequester carbon (carbon farming/gardening)</li>
          </ul>
          <StaticQuery
            query={graphql`
              query {
                cdfa: file(relativePath: { eq: "cdfa-organic.png" }) {
                  childImageSharp {
                    fluid(maxWidth: 1600) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
            `}
            render={data => <Img style={{ maxWidth: 300, margin: '3rem auto 1rem auto' }} fluid={data.cdfa.childImageSharp.fluid} />}
          />
          <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>Nicasio Blend is Organic.  More to follow soon.</p>
          <h2 style={{ marginTop: '1rem' }}>West Marin Compost is a public-private partnership between:</h2>
          <ul>
            <li>Lunny Grading and Paving, Inc.</li>
            <li>Lafranchi Dairy</li>
            <li>Marin County</li>
          </ul>

          <h2>Technical assistance from:</h2>
          <ul>
            <li>West Marin Compost Coalition</li>
          </ul>
          <h2>Administrative assistance from:</h2>
          <ul>
            <li>Marin Resource Conservation District (RCD)</li>
          </ul>
          <h2>Funding support from:</h2>
          <ul>
            <li>USDA Natural Resources Conservation</li>
            <li>Service-Conservation Innovation Grant</li>
            <li>Lunny Grading and Paving, Inc.</li>
            <li>The Rathmann Family Fund</li>
            <li>Redwood Empire</li>
          </ul>

          <Link to="/about" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>About</SectionButton>
          </Link>
          <div style={{ padding: '1rem 0 0 0' }} class="sharethis-inline-share-buttons"></div>
        </QuickInfoWrapper>
      </Section >
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  max-width: 992px;
  text-align: center;
  h2 {
    padding: 1rem 0;
    color: ${styles.colors.mainBrown}
  }
  ul {
    margin: 0 auto;
    width: 80%;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  li {
    font-size: 1.1rem;
    margin: 0 auto;
    padding: 1rem 2rem;
  }
  p {
    text-align: left;
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