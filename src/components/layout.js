/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Footer from "./Footer";
import Header from './Header';
import {GlobalStyled} from "./styles/GlobalStyles";

const Layout = ({ children }) => {
 

  return (
    <>
      <GlobalStyled />
      <Header /> 
      <main>{children}</main>
      <Footer />
          </>
  )
}



export default Layout
