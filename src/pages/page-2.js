import React from 'react'

import SEO from '../components/seo'
import { Footer } from '../components/footer'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1 style={{ padding: 200 + 'px' }}>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <AniLink fade to="/">
      Go back to the homepage
    </AniLink>
    <Footer />
  </>
)

export default SecondPage
