import { SEO } from '@/components/SEO/Seo'
import React from 'react'

import '../styles/globalStyle.scss'


//https://script.google.com/a/macros/antpack.co/s/AKfycbx5akv6mUIZmfp0HrqKEtEPWpV8NYneT9ts6y5MVYCblULTIAi872GjC6ahNQ_JG6ZDOQ/exec
export default function cotizador() {
  return (
    <>
      <SEO title="Antpack - Cotizador"></SEO>
      <main style={{ width: '100vw', height: '100vh' }}>
        <iframe style={{ width: '100%', height: '100%', border: 'none', margin: 0, padding: 0 }} src="https://script.google.com/a/macros/antpack.co/s/AKfycbx5akv6mUIZmfp0HrqKEtEPWpV8NYneT9ts6y5MVYCblULTIAi872GjC6ahNQ_JG6ZDOQ/exec">

        </iframe>
      </main>
    </>
  )
}
