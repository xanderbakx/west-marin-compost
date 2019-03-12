import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'
// import { StaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'

export default class DropOffContent extends Component {
  render() {
    return (
      <Section>
        <Title message="Got Yard Debris?" title="" />
        <DropOffContentWrapper>
          <h3 style={{ paddingTop: '2rem' }}>The green materials drop-off site is open to the public:</h3>
          <p className="text">Monday - Saturday from 7am to 2:30pm</p>
          <p className="text">5575 Nicasio Valley Rd, Nicasio</p>
          <p className="text">(415) 662-9849</p>

          <h3 style={{ paddingTop: '2rem' }}>Free drop-off to create defensible space</h3>
          <p className="text">This year mnore than any other year, havin a defensible space around your home will be on people's mind. Marin County has set two weekends where you can drop-off yard debris at no charge to you. The event is sponsored by the Marin County Fire Department. The dates are:</p>
          <p className="text">June 9-10, 2019</p>
          <p className="text">July 14-15, 2019</p>
          <p className="text">Hours: 9am - 3:30pm</p>

          <h3 style={{ paddingTop: '2rem' }}>Drop-off fee</h3>
          <p className="text">The drop-off fee provides essential long-term support for the Project and is competitive with alternative green materials disposal options for West Marin residents, while reducing the time and fuel needed for trucking to east Marin disposal sites, or beyond.</p>
          <p className="text"><b>Please note: </b>It is illegal to put toxins into the green can or dispose of them in any but an approved toxic waste facility. Each incoming load is inspected; contaminated loads are not accepted. If contaminants are found following off-loading, the driver will be required to immediately reload and remove the material from the site.</p>
          <p className="text">Only clean green material (yard debris and wood scraps) will be accepted at the drop off site.</p>
          <p className="text"><b>Tipping fee: </b>A tipping fee is charged for all materials delivered to the drop-off site. Each load will be measured to assess the volume.</p>

          <div className="grid-container">
            <div>Green material</div>
            <div>$20/cubic yard</div>
            <div>Tree trunks</div>
            <div>$45/ton</div>
            <div>Tree stumps up to 1' diameter</div>
            <div>$110 each</div>
            <div>Tree stumps up to 2' diameter</div>
            <div>$220 each</div>
            <div>Tree stumps up to 3' diameter</div>
            <div>$330 each</div>
            <div>Dimensional lumber/wood scraps</div>
            <div>$20/cubic yard</div>
          </div>

          <p className="text"><b>West Marin equestrian facilities: </b>West Marin Compost provides manure hauling services. We will place an empty dumpster for used bedding and manure. Full dumpsters are hauled and replaced by an empty one as needed. Please call us at (415) 662-9849 to set up your service and discuss fees.</p>
          <p className="text"><b>Other manures: </b>Please contact us for services on other manure management.</p>


          <Link to="/about" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>About</SectionButton>
          </Link>

        </DropOffContentWrapper>
      </Section>
    )
  }
}

const DropOffContentWrapper = styled.div`
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
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: ". ." ". ." ". ." ". ." ". ." ". .";
    grid-column-gap: 1rem;
  }     
`