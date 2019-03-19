import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import '../../css/fancy-accordion.css'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion'
// import 'react-accessible-accordion/dist/fancy-example.css'

const CompostItem = (({ image, name, description, price, bulk }) => (
  <section className='compostItem'>
    <Accordion>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>{name}</h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <GridWrapper>
            <div>
              <Img className="compostImg" style={{ maxWidth: '400px', marginBottom: '0.5rem' }} fluid={image.childImageSharp.fluid} alt={name} />
            </div>
            <div>
              <p>{description}</p>
              <p style={{ paddingTop: '1rem', fontWeight: '700' }}>${price} yd<sup>3</sup></p>
              <p>${bulk} yd<sup>3</sup></p>
            </div>
          </GridWrapper>
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  </section>
));

export default CompostItem

const GridWrapper = styled.div`
  .compostImg {
    margin: 0 auto;
  }
  @media (min-width: 600px) {
    .compostImg {
      margin: 0 1rem 1rem 0;
      /* padding: 1rem; */
    }
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". .";
  }

`