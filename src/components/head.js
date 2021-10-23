import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as CSS from './layout.module.css'

const Head = ({pageTitle}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={CSS.head_container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={CSS.siteTitle}>{data.site.siteMetadata.title}</header>
        </div>
    )
}

export default Head