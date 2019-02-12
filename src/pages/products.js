import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader } from '../utils'
import productsImg from '../images/placeholder/ph2.jpg'

const ProductsPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={productsImg}>
      Products
    </PageHeader>
  </Layout>
)

export default ProductsPage