import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader } from '../utils'
import contactImg from '../images/placeholder/ph6.jpg'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      Contact
    </PageHeader>
  </Layout>
)

export default ContactPage