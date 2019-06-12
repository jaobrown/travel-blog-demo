import React from "react"
import Nav from '../components/Nav'
import Featured from '../components/Featured'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav/>
    <Featured />
  </Layout>
)

export default IndexPage
