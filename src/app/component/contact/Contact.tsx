import React from 'react'
import LetsConnectCard from './LetsConnectCard'
import { ContactForm } from './ContactForm'

export default function Contact() {
  return (
    <div id="contact" className='grid grid-cols-1 lg:grid-cols-2
  gap-8 lg:gap-18 items-center
  max-w-7xl mx-auto'>
        <ContactForm/>
        <LetsConnectCard/>
    </div>
  )
}

 