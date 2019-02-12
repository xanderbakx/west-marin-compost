import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader } from '../utils'
import educationImg from '../images/placeholder/ph4.jpg'

const EducationPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={educationImg}>
      Education
    </PageHeader>
  </Layout>
)

export default EducationPage