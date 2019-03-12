import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'
// import { StaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'

export default class EducationContent extends Component {
  render() {
    return (
      <Section>
        <Title message="West Marin Compost hopes that you will visit our website regularly to find out about events, workshops, articles, and videos." title="" />
        <EducationContentWrapper>
          <h3 style={{ paddingTop: '2rem' }}>Carbon Farming</h3>
          <p className="text">Increasing organic matter in our soils helps building healthy soils:</p>
          <ul>
            <li>conserve water</li>
            <li>reduce erosion</li>
            <li>improve soil structure</li>
            <li>diverse, abundant microbial population</li>
            <li>optimized nutrient management</li>
          </ul>

          <p className="text">Increased soil organic matter also takes CO2 from the atmosphere and sequesters it in the soil, therby helping to reverse climate change. Wise use of compost and mulches helps to carbon farm.</p>
          <p className="text">Carbon farming found its roots right here in Marin County through the <a href="https://www.marincarbonproject.org" target="_blank" rel="noopener noreferrer">Marin Carbon Project</a></p>

          <iframe title="Soil Story" width="560" height="315" src="https://www.youtube.com/embed/nvAoZ14cP7Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h3 style={{ paddingTop: '2rem' }}>Getting started with carbon gardening</h3>
          <p className="text">We can also do our part of carbon sequestration in the backyard. The same principals apply. Here is an educational article that will get you going.</p>



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