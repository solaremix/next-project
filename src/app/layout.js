"use client"

import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className='flex'>
          <Sidebar></Sidebar>
          {children}
        </div>
      </body>
    </html>
  )
}
