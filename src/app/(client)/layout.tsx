import Footer from '@/components/General/Footer'
import HeaderProvider from '@/components/General/Header/HeaderProvider'
import { Toaster } from '@/components/ui/sonner'

import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='py-16'>
      <HeaderProvider />
        {children}
        <Toaster position="top-right" richColors />
      </div>
      <Footer />
    </>
  )
}
