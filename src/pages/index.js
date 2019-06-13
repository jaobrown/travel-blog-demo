import React from "react"
import Nav from '../components/Nav'
import Featured from '../components/Featured'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from '../components/Home'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav/>
    <Featured />
    <Home/>
  </Layout>
)

export default IndexPage
