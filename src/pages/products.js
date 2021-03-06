import React from "react"
// import ReactDOM from 'react-dom'
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner, styles, Title } from '../utils'
import productsImg from '../images/piles.jpg'
import CompostItem from '../components/ProductsComponent/CompostItem'
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

import priceListEng from '../documents/WMC_Price_List_2020.pdf'
import priceListSp from '../documents/WMC_Lista_de_Precios_2020.pdf'

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const ProductsPage = () => (
  <StaticQuery query={graphql`
      {
        table: file(relativePath: {eq: "table.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nicasio: file(relativePath: {eq: "nicasioBlend.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hiTest: file(relativePath: {eq: "marinHiTest.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mallardPlus: file(relativePath: {eq: "marinMallardPlus.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        livingBiochar: file(relativePath: {eq: "livingBiochar.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vineyardMulch: file(relativePath: {eq: "marinVineyardMulch.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ultraLight: file(relativePath: {eq: "ultraLightMulch.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        treeMulch: file(relativePath: {eq: "treeMulch.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        chunkyMulch: file(relativePath: {eq: "chunkyMulch.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pathMulch: file(relativePath: {eq: "marinPathMulch.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        deckMix: file(relativePath: {eq: "compostProducts.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        amendedSoil: file(relativePath: {eq: "amended.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        biochar: file(relativePath: {eq: "biochar.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        compostBlends: file(relativePath: {eq: "compostProducts.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oysterShell: file(relativePath: {eq: "oysterShell.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        

      }
  `} render={(data) => (
      <Layout>
        <SEO title="Products" keywords={[`gatsby`, `application`, `react`]} />
        <PageHeader img={productsImg}>
          <Banner title="Products" subtitle=""></Banner>
          {/* <FaChevronDown style={{ fontSize: '3rem', color: '#fff', position: 'absolute', bottom: 0 }} /> */}
        </PageHeader>

        <ProductsWrapper>
          <p className="text">Please, browse this page to select the product that works best for your soil, your plants and you. You can refer to the table to estimate how much material you will need or you can use an <a id="calculator" href="https://www.savingwater.org/lawn-garden/soil-mulch-compost-fertilizers/compost-mulch-calculator/" target="_blank" rel="noopener noreferrer">online calculator</a> Of course, our knowledgeable staff is happy to assist you in deciding which product best suits your needs. <b>(415) 662-9849</b></p>

          <p className="text">Compost is a soil amendment and should not be used by itself.  It is intended to improve soil properties such as water management, introduce a diverse microbial population, improve soil structure and enhance nutrient availability throughout the growing season.  It is not recommended to use compost by itself as a growing medium.</p>

          <Img src="data.table" style={{ maxWidth: 600, margin: '1rem auto 1.5rem auto' }} fluid={data.table.childImageSharp.fluid} />

          <h4>As of April 1, 2020 our prices will increase as follows:</h4>
          <p className="text"><b>Nicasio Blend:</b> $25 per cubic yard</p>

          <div id="buttons">
            <Button variant="secondary" style={{ margin: "0 0.3rem" }}><a href={priceListEng} target="_blank" rel="noopener noreferrer">Get your PDF of our pricelist here</a></Button>
            <Button variant="secondary" style={{ margin: "0 0.3rem" }}><a href={priceListSp} target="_blank" rel="noopener noreferrer">Obtenga su PDF de nuestra lista de precios aquí</a></Button>
          </div>

          <Title message="" title="Click on the compost items below to learn more" />
          <CompostItem
            image={data.nicasio}
            name="Nicasio Blend"
            description="This dark, rich, premium quality compost is made from recycled yard trimmings, dairy manure and horse manure. Nicasio Blend is recommended for applications that do not require high nitrogen content such as trees, shrubs, grape vines and natives. It provides valuable organic matter to soil, making it easier to work and more productive. In sandy soil it increases moisture-holding capacity, making soil nutrients more available to plants. In heavy clay soils, porosity is increased which improves aeration in the root zone and overall drainage."
            price="$25 per cubic yard"
          />
          <CompostItem
            image={data.hiTest}
            name="Marin Hi-Test Compost"
            description="All the benefits of Nicasio Blend but with higher nitrogen content from the inclusion of High-N Manure such as goat and chicken. Hi-Test Compost is great for new gardens and landscapes, especially where soils have been neglected or overworked. In addition to improving soil structure, our Hi-Test Compost will give new plants the nitrogen needed for a vibrant start."
            price="$32.50 per cubic yard"
          />
          <CompostItem
            image={data.mallardPlus}
            name="Marin Mallard Plus"
            description="All the benefits of Hi-Test Compost, but designed for use in poorly drained soils. Mallard Plus is great for clay soils and raised beds mixed with good garden soil."
            price="$34 per cubic yard"
          />
          <CompostItem
            image={data.livingBiochar}
            name="Marin Hi-Test Living Biochar"
            description="Our Hi-Test Compost was amended with biochar to have 15% biochar by volume in the finished product. Since the biochar has been in process with the Hi-Test Compost, the biochar is now fully charged with microbes and nutrients. See below for further details on biochar."
            price="$45 per cubic yard"
          />
          <CompostItem
            image={data.vineyardMulch}
            name="Marin Vineyard Mulch"
            description="An affordable, organic alternative to expensive bark products. It suppresses weeds, conserves moisture, moderates soil temperatures, improves soil structure and controls erosion. Vineyard Mulch undergoes a brief composting process at over 131°F that renders it virtually free of weed seeds and plant pathogens. As it slowly breaks down, it provides the organic matter, nutrients and microbes that help plants thrive. Worms thrive in soils that have a generous layer of Vineyard Mulch. Their tunneling activities allow oxygen to get to plant roots and their castings provide a beneficial nutrient input. Does not float."
            price="$18 per cubic yard"
          />
          <CompostItem
            image={data.ultraLight}
            name="Ultra-Light Mulch"
            description="The hybrid mulch that has qualities of both compost and mulch will finish off any landscape just perfectly. Like any other mulch it stays on the surface of the soil and is not incorporated into the soil. While the mulch will initially act as a weed suppressant, as it breaks down it will help feed your soil. As the name implies, this mulch is lightweight and easy to work with. Landscapers specify Ultra-Light Mulch when a neat appearance or distinctive border is desired. Not recommended in windy areas."
            price="$15 per cubic yard"
          />
          <CompostItem
            image={data.treeMulch}
            name="Tree Mulch"
            description="It is derived from tree stumps and logs. Tree mulch provides the same overall benefits to the soil as the Vineyard Mulch. Due to its woodier nature it will last longer, but provide less nutrients. Offered screened Medium (<1.5”) or coarse (>1.5”)."
            price="$15 per cubic yard"
          />
          <CompostItem
            image={data.chunkyMulch}
            name="Chunky Mulch"
            description="This is a dark woody mulch that has gone through a full compost process. It provides the same benefits as Vineyard mulch or Blond Mulch, but will break down faster, since the compost process has impregnated the wood with fungi. As the mulch contains also some fines it will also provide some nutrients over time. Some of this product may float when flooded."
            price="$10 per cubic yard"
          />
          <CompostItem
            image={data.pathMulch}
            name="Marin Path Mulch"
            description="The economic, environment friendly substitute for expensive landscape barks. Made from recycled wood that’s ground and screened, Path Mulch is long-lasting walk-on mulch that will suppress weeds, conserve moisture and keep dirt and mud out of your house. It has a texture and color that work well with vivid garden colors. Landscapers specify Path Mulch when a neat appearance or distinctive border is desired."
            price="$10 per cubic yard"
          />
          <CompostItem
            image={data.deckMix}
            name="Marin Deck Mix"
            description="The ultimate affordable soil amendment, Deck Mix is a blend of all our products that occurs when we sweep our loading area. You'll find Nicasio Blend, Organic Hi-Test Compost, Mallard Plus, Feather-Lite Amended Soil and our various mulches in this blend. Use Deck Mix as a mulch or amendment for flowers, shrubs and trees. Not recommended for veggies. Supply is limited."
            price="$7 per cubic yard"
          />
          <CompostItem
            image={data.amendedSoil}
            name="Marin Amended Soil"
            description="Plant directly into Amended Soil. It’s great for filling raised beds, replacing poor quality soil, adding elevation or leveling a project site, or filling in behind a retaining wall. Amended Soil is a good-looking blend of clean soil and Mallard Plus. Since a high-quality topsoil is used, rather than a mined soil, no weed-free guarantees can be made."
            price="$45 per cubic yard"
          />
          <CompostItem
            image={data.biochar}
            name="Marin Biochar"
            description="Biochar (or agrichar) is one of the products created when high-carbon materials such as forest bi-products are gasified under low oxygen conditions (pyrolysis). The process produces both syngas for green energy and biochar to be used as a soil amendment. Biochar is applied only once, but the results will last forever as long as you keep your soil biologically active. Annual applications of compost, mulch, cover crop, etc. will recharge the biochar over the years."
            price="$180 per cubic yard"
          />
          <CompostItem
            image={data.compostBlends}
            name="Compost Blends"
            description="You have specific needs for oyster shell, greens, and, worm castings, etc. to apply directly with your compost? West Marin Compost can make your custom blend. You may order the amendments from your supplier and have it delivered to West Marin Compost. A blending fee of $5.00 per finished cubic yards applies, minimum blending fee $25.00."
          />
          <CompostItem
            image={data.oysterShell}
            name="Marin Oyster Shell"
            description="Oyster shell will help some clay soils in improving drainage. It also helps neutralize soil pH. Oyster shell will enhance plant growth and make plants stronger."
            price="$200 per cubic yard"
          />

          <h2 style={{ paddingTop: '1.5rem' }}>Product Disclaimer</h2>
          <p className="text">Our current products are compliant with state standards for physical contaminants. However, they are made from recycled materials, not virgin feedstocks. Very small pieces of non-organics may be found. All products are sold as is and all sales are final.</p>
          <h2 style={{ paddingTop: '1.5rem' }}>Cancellation/Refund Policy</h2>
          <p className="text">After you place an order you can always cancel at no cost as long as your delivery has not started yet. You will not be billed. Please cancel your orders no later than 2 hours before your scheduled delivery. West Marin Compost strives to have happy customers. If you are not satisfied please let us know. If the wrong product has been delivered, we will gladly replace the order with the right product. If our product did not perform as it should we will replace it or give you a refund. We will always evaluate the problem you report and do our best to find a solution.</p>
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
  h2 {
    padding: 2rem 0 0.5rem 0;
    color: ${styles.colors.mainBrown}
  }
  p {
    padding-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: ${styles.colors.mainWhite}
  }
  a:hover {
    text-decoration: none;
    color: ${styles.colors.mainWhite}
  }
  #calculator {
    text-decoration: none;
    color: ${styles.colors.mainBrown}
  }
  .text {
          line-height: 2rem;
    color: ${styles.colors.mainGrey};
        word-spacing: 0.2rem;
      }
  #buttons {
    display:flex;
    justify-content:center;
    /* align-item:center; */
  }
`