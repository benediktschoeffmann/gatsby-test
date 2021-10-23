import * as React from 'react'
import * as CSS from './layout.module.css'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Nav = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    navigation {
                        nodes {
                            slug
                            title
                        }
                    }
                }
            }
        }
    `)


    return (
        <nav>
        {console.log(data)}
            <ul className={CSS.navLinks}>
                {
                    data.site.siteMetadata.navigation.nodes.map(node => (
                        <li className={CSS.navLinkItem}>
                            <Link to={node.slug} className={CSS.navLinkText}>
                                {node.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Nav