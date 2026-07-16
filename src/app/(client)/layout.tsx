

import React from 'react'
import { Toaster } from 'sonner'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='py-16'>
  
        {children}
        <Toaster position="top-right" richColors />
      </div>
   
    </>
  )
}
