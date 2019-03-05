import React from 'react'
import Img from 'gatsby-image'

import {
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

import { Grid, Cell } from 'styled-css-grid'

const CompostItem = (({ image, name, description }) => (
  <section className='compostItem'>

    <AccordionItem name="nicasio">
      <AccordionItemTitle>
        <h3>{name}</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <Grid columns={"150px 1fr"}>
          <Cell>
            <Img style={{ maxWidth: '200px' }} fluid={image.childImageSharp.fluid} alt={name} />
          </Cell>
          <Cell>
            <p style={{ paddingTop: '1rem' }}>{description}</p>
          </Cell>
        </Grid>
      </AccordionItemBody>
    </AccordionItem>
  </section>
));

export default CompostItem