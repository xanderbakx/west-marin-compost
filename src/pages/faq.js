import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils'
import faqImg from '../images/placeholder/ph5.jpg'

const FaqPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={faqImg}>
      <Banner title="FAQ" subtitle="Frequently asked questions"></Banner>
    </PageHeader>
  </Layout>
)

export default FaqPage