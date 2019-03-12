import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'
// import { StaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'

export default class ContactContent extends Component {
  render() {
    return (
      <Section>
        <Title message="West Marin Compost welcomes your inquiries and comments" title="" />
        <ContactContentWrapper>
          <p className="text">Phone: (415) 622-9849</p>
          <p className="text">Orders: nancy@westmarincompost.com</p>
          <p className="text">Manure hauling: kevin@westmarincompost.com</p>
          <p className="text">Soil questions: will@westmarincompost.com</p>

          <Link to="/about" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>About</SectionButton>
          </Link>

        </ContactContentWrapper>
      </Section>
    )
  }
}

const ContactContentWrapper = styled.div`
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