import React from 'react'
import Helmet from 'react-helmet'

export const SEO = (props) => {
  const { description, title } = props
  const url = 'https://harrisgeo88.github.io/blog-post-checklist/'
  const image =
    'https://harrisgeo88.github.io/blog-post-checklist/assets/checklist.png'
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-gb',
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          property: `keywords`,
          content: `blog, blogpost, blogging, checklist, github`,
        },
        {
          name: `description`,
          content: description,
        },
        {
          name: `robots`,
          content: 'index,follow',
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:url`,
          content: url,
        },
        {
          name: `twitter:creator`,
          content: `harrisgeo88`,
        },
        {
          property: `twitter:image`,
          content: image,
        },
      ]}
    />
  )
}
