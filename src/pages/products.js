import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils'
import productsImg from '../images/placeholder/ph2.jpg'
import CompostItem from '../components/ProductsComponent/CompostItem'
import styled from 'styled-components'


import { Accordion } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

import { StaticQuery, graphql } from "gatsby"

const ProductsPage = () => (
  <StaticQuery query={graphql`
      {
        nicasio: file(relativePath: {eq: "nicasioBlend.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `} render={(data) => (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        {/* <h1>{console.log(data)}</h1> */}
        <PageHeader img={productsImg}>
          <Banner title="Products" subtitle="Buy our products"></Banner>
        </PageHeader>
        <ProductsWrapper>
          <Accordion>
            <CompostItem
              image={data.nicasio}
              name="Nicasio Blend"
              description="This dark, rich, premium quality compost is made from recycled yard trimmings, dairy manure and horse manure. Nicasio Blend is recommended for applications that do not require high nitrogen content such as trees, shrubs, grape vines and natives. Or, for high nitrogen loving plants you can supplement nitrogen to meet the plant's needs.

          Provides valuable organic matter to soil, making it easier to work and more productive. In sandy soil it increases moisture-holding capacity, making soil nutrients more available to plants. In heavy clay soils, porosity is increased which improves aeration in the root zone and overall drainage.

            Nicasio Blend provides a wealth of slow release nutrients and beneficial microbes to your soil and plants. It's screened to approximately 1/2 inch."
          />
          </Accordion>
        </ProductsWrapper>
      </Layout>
    )}
  />
)

export default ProductsPage

const ProductsWrapper = styled.div`
      width: 90%;
      margin: 2rem auto;
      max-width: 992px;
`