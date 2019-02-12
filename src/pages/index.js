import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { HomeHeader, Banner } from '../utils'
import img from '../images/header/index-header.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="West Marin Compost" subtitle="5575 Nicasio Valley Rd, Nicasio, CA 94946">

      </Banner>
    </HomeHeader>
  </Layout>
)

export default IndexPage
