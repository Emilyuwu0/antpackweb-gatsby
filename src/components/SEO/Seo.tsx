import React from "react"

interface SeoProps {

}

export const SEO = ({ }: SeoProps) => {


  return (
    <>
      <meta name="type" content="article" />
      <meta name="title" content="LilInterns" />
      <meta name="description" content="" />
      <meta name="image" content="../../assets/images/favIcon.png" />
      <meta property="og:type" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="../../assets/images/favIcon.png" />
      <meta property="og:image:secure_url" content="../../assets/images/favIcon.png" />
      <meta property="og:image:secure" content="../../assets/images/favIcon.png" />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="450" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="../../assets/images/favIcon.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}