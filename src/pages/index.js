import React from 'react'
import { Link } from 'gatsby'
import Nav from '../components/Nav'
import Featured from '../components/Featured'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Home from '../components/Home'
import './index.css'
import Footer from '../components/Footer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Featured />
    <Home />
    <Link to="/blog/" className="viewmore">
      View More
    </Link>
    <Footer/>
  </Layout>
)

export default IndexPage
