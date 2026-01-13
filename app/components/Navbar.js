'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Monitor, Code2, Smartphone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Check device size
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && isMobile) {
        const nav = document.querySelector('nav')
        const button = document.querySelector('button[aria-label*="menu"]')

        if (nav && !nav.contains(event.target) && button && !button.contains(event.target)) {
          setIsOpen(false)
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen, isMobile])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, isMobile])

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-sm shadow-lg' : 'bg-[#1a1a1a]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 md:py-3 lg:py-4">
          <div className="flex justify-between items-center font-['Inter']">
            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-xl p-1.5 sm:p-2 flex items-center justify-center shadow-lg">
                <Monitor className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                <Code2 className="absolute bottom-0.5 right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                <Smartphone className="absolute top-1/3 left-1/3 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
                  TechBiz Solutions
                </h2>
                {/* <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 font-medium hidden sm:block">
                  Digital Transformation Experts
                </p> */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white no-underline text-sm lg:text-sm xl:text-base whitespace-nowrap hover:text-gray-300 transition-colors duration-200 px-2 py-1.5 rounded-md hover:bg-gray-800/50 active:bg-gray-800 text-center min-w-[55px]"
                >
                  {link.name}
                </Link>
              ))}

              {/* Login/Signup */}
              <div className={`flex items-center ${isTablet ? 'gap-1.5' : 'gap-2'} ml-2`}>
                <Link
                  href="/login"
                  className={`text-[#4CAF50] no-underline whitespace-nowrap hover:text-[#45a049] transition-colors duration-200 px-2 py-1.5 rounded-md hover:bg-gray-800/50 active:bg-gray-800 text-center text-sm`}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className={`text-[#4CAF50] no-underline whitespace-nowrap border border-[#4CAF50] rounded hover:bg-[#4CAF50] hover:text-white transition-colors duration-200 active:scale-95 text-center text-sm px-3 py-1.5`}
                >
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden flex flex-col justify-center items-center rounded-md hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                isMobile ? 'w-9 h-9 p-1.5' : 'w-10 h-10 p-2'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                } ${isMobile ? 'w-5 h-0.5' : 'w-6 h-0.5'}`}
              ></span>
              <span
                className={`block bg-white transition-all duration-300 mt-1 ${isOpen ? 'opacity-0' : ''} ${
                  isMobile ? 'w-5 h-0.5' : 'w-6 h-0.5'
                }`}
              ></span>
              <span
                className={`block bg-white transition-all duration-300 mt-1 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''} ${
                  isMobile ? 'w-5 h-0.5' : 'w-6 h-0.5'
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}
            role="region"
            aria-labelledby="mobile-menu-button"
          >
            <div className="flex flex-col gap-1 pb-3">
              {[
                { name: 'Home', href: '/', icon: Monitor },
                { name: 'About', href: '/about', icon: Code2 },
                { name: 'Services', href: '/services', icon: Smartphone },
                { name: 'Contact', href: '/contact', icon: Monitor },
              ].map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  className="text-white no-underline text-sm sm:text-base py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center gap-2"
                >
                  <div className="w-7 h-7 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  {name}
                </Link>
              ))}

              <div className="pt-2 mt-2 border-t border-gray-800 flex flex-col gap-1.5">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  className="text-[#4CAF50] no-underline text-sm sm:text-base py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 active:bg-gray-700 flex items-center gap-2"
                >
                  <div className="w-7 h-7 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-[#4CAF50] font-bold text-sm">↪</span>
                  </div>
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  className="text-[#4CAF50] no-underline text-sm sm:text-base py-2 px-3 rounded-lg border border-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-colors duration-200 active:scale-95 flex items-center justify-center gap-2"
                >
                  <div className="w-7 h-7 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center">
                    <span className="text-[#4CAF50] font-bold text-sm">✓</span>
                  </div>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-14 sm:h-16 md:h-18 lg:h-20"></div>

      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
