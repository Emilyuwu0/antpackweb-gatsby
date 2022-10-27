import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import React from 'react'

import './defaultLayout.scss'

interface defaultLayoutProps {
  children: object
}

export default function DefaultLayout({ children }: defaultLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
