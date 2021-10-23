import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import * as CSS from './footer.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    links {
                        email {
                            image
                            url
                        }
                        facebook {
                            image
                            url
                        }
                        instagram {
                            image
                            url
                        }
                    }
                }
            }
        }
    `)

    return (
        <footer>
            <div className={CSS.row}>
                <div className={CSS.icon-wrapper}>
                    <Link to={data.site.SiteMetadata.links.email.url}>
                        <div className={CSS.icon}>
                            <StaticImage className={CSS.icon-image} alt="Schreib mir ein Mail" src={"../../" + data.site.SiteMetadata.links.email.image}></StaticImage>
                        </div>
                    </Link>
                </div>
                <div className={CSS.icon-wrapper}>
                    <Link to={data.site.SiteMetadata.links.facebook.url}>
                        <div className={CSS.icon}>
                            <StaticImage className={CSS.icon-image} alt="Besuch mich auf Facebook" src={"../../" + data.site.SiteMetadata.links.facebook.image}></StaticImage>
                        </div>
                    </Link>
                </div>
                <div className={CSS.icon-wrapper}>
                    <Link to={data.site.SiteMetadata.links.instagram.url}>
                        <div className={CSS.icon}>
                            <StaticImage className={CSS.icon-image} alt="Besuch mich auf Instagram" src={"../../" + data.site.SiteMetadata.links.instagram.image}></StaticImage>
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer