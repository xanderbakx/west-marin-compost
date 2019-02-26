import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils'
import aboutImg from '../images/placeholder/ph1.jpg'
import AboutContent from "../components/AboutComponent/AboutContent";

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner title="About" subtitle="Learn about us"></Banner>
    </PageHeader>
    <AboutContent />
  </Layout>
)

export default AboutPage