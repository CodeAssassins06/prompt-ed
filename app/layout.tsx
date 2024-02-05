import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react';
import './globals.css'
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from '@/components/navbar/Navbar';
import SideNavbar from '@/components/sidebar/Sidebar';
import RightSideBar from '@/components/RightSideBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex justify-between" style={{ height: "calc(100vh - 92px)" }}>
            <SideNavbar />
            <div className="size-full overflow-auto p-4">

              {children}
            </div>
            <RightSideBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

