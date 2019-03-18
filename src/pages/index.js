import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from '../utils'
// import img from '../images/index-header.jpg'
import QuickInfo from '../components/HomePageComponent/QuickInfo'

// import { StaticQuery, graphql } from "gatsby"

const IndexPage = () => (

  <Layout>
    <HomeHeader>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Banner title="West Marin Compost" subtitle="5575 Nicasio Valley Rd, Nicasio, CA 94946">
        <BannerButton style={{ margin: '2rem auto' }}>Products</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
