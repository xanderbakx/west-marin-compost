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

          <iframe id="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.8221090288475!2d-122.70785921510539!3d38.074523771706296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085b8a52bb01cd1%3A0xbd730200e9ac9254!2sWest+Marin+Compost!5e0!3m2!1sen!2sus!4v1552948801542" width="600" height="400" frameborder="0" style={{ border: 0 }} allowfullscreen />

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
  #map {
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }   
`