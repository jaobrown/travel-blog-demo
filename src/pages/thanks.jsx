import React from 'react'
import Nav from '../components/Nav'
import Layout from '../components/layout'
import SEO from '../components/seo'

import './contact.css'

const Thanks = () => (
    <Layout>
        <SEO title="Thanks!" description="I'm so glad you said hi"/>
        <Nav />
        <div className="contact__header"></div>
        <div className="contact__thanks">
            <h1>Thanks! I'll get back with you shortly.</h1>
        </div>
    </Layout>
)

export default Thanks