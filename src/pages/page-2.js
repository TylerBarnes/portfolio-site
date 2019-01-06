import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import AniLink from "gatsby-plugin-transition-link/AniLink";

const SecondPage = () => (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <AniLink fade to="/">Go back to the homepage</AniLink>
    </Layout>
)

export default SecondPage
