

import HeaderProvider from '@/components/general/header/HeaderProvider'
import Footer from '@/components/layout/Footer'
import React from 'react'
import { Toaster } from 'sonner'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='py-16'>
  <HeaderProvider/>
        {children}
        <Toaster position="top-right" richColors />
      </div>
   <Footer/>
    </>
  )
}
