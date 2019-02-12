import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils'
import dropOffImg from '../images/placeholder/ph3.jpg'

const DropOffPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={dropOffImg}>
      <Banner title="Drop Off" subtitle="Drop off your materials"></Banner>
    </PageHeader>
  </Layout>
)

export default DropOffPage