
import SupportPage from '@/components/general-entity/Support';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: "Support | Arkin Fertilizers",
  description:
    "Access technical support, product documentation, and expert assistance from the Arkin Fertilizers team. We’re here to help you make sustainable farming more effective.",
};

export default function page() {
  return (
    <div>
      <SupportPage/>
    </div>
  )
}
