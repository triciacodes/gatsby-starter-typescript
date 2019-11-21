/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Header from './header'
import './layout.css'

interface IProps {
  children: ReactNode
}

const Layout = ({ children }: IProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    </>
  )
}

export default Layout
