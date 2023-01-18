import React from "react"

import { useTranslation } from 'react-i18next'

interface SeoProps {
  title: string,
  description?: string,
  pathname?: string,
  children?: any
}

export const SEO = ({ title, description, pathname, children }: SeoProps) => {

  const [t, i18n] = useTranslation('global')

  const seo = {
    title: title || 'antpack',
    description: description || 'description',
    // image: `${siteUrl}${image}` || '',
    // url: `${siteUrl}${pathname || ``}`,
    // twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      {/* <meta name="twitter:url" content={seo.url} /> */}
      <meta name="twitter:description" content={seo.description} />
      {/* <meta name="twitter:image" content={seo.image} /> */}
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      {/* <link rel="icon" href="src/assets/images/favIcon.png" /> */}
      {children}
    </>
  )
}