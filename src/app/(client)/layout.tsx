

import HeaderProvider from '@/components/general-entity/header/HeaderProvider'
import Footer from '@/components/layout/Footer'
import React from 'react'


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>

      <HeaderProvider />
      {children}

      <Footer />
    </>
  )
}
