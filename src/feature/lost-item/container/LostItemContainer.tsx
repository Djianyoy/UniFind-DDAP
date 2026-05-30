"use client"

import Navbar from '@/shared/Navbar/Navbar'
import React from 'react'
import LostItemSection from '../section/LostItemSection'
import Footer from '@/shared/Footer/Footer'
import { useAuth } from '@/shared/hooks/useAuth'

const LostItemContainer = () => {
    useAuth()
  return (
    <main>
        <Navbar/>
        <LostItemSection/>
        <Footer/>
    </main>
  )
}

export default LostItemContainer