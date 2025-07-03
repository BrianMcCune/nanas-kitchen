import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  title?: string
  description?: string
  pathname?: string  // mark as optional or required depending on usage
  image?: string
}

const SEO: React.FC<SEOProps> = ({ title, description, pathname = "/", image = "/default-og.jpg" }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const {
    siteMetadata: { title: defaultTitle, description: defaultDescription, siteUrl },
  } = site

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default SEO
