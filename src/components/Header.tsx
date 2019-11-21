import { Link } from 'gatsby'
import React from 'react'

interface IProps {
  siteTitle: string
}

const Header = ({ siteTitle }: IProps) => (
  <header>
    <h1 style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)

export default Header
