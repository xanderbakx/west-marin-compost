import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from '../utils'
import QuickInfo from '../components/HomePageComponent/QuickInfo'
// import { Helmet } from 'react-helmet'

// import { StaticQuery, graphql } from "gatsby"
import { FaChevronDown } from 'react-icons/fa'

const IndexPage = () => (

  <Layout>
    <HomeHeader>
      <SEO title="Home" keywords={[`compost`, `west`, `marin`, `agriculture`, `farm`, `vineyard`, `mulch`]} />
      <Banner title="West Marin Compost" subtitle="5575 Nicasio Valley Rd, Nicasio, CA 94946">
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '2rem auto' }}>Products</BannerButton>
        </Link>
      </Banner>
      {/* <FaChevronDown style={{ display: 'block', fontSize: '3rem', color: '#fff', position: 'fixed', bottom: '0px' }} /> */}
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
