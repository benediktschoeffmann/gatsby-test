import * as React from 'react'
import "@fontsource/roboto"
import {
  container,
  heading
} from './layout.module.css'
import Head from './head.js'
import Nav from './nav.js'

const Layout = ({ pageTitle, children }) => {

  return (
    <div className={container}>
      <Head pageTitle={pageTitle}/>
      <Nav/>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout