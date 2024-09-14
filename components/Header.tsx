'use client'

import { useState, useEffect } from 'react'
import { Link as ScrollLink, Events } from 'react-scroll'
import { Cpu } from 'lucide-react'
import { navItems } from '@/libs/data'


export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item.href)
      if (element) observer.observe(element)
    })

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    Events.scrollEvent.register('end', () => {
      setActiveSection(window.location.hash.slice(1))
    })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      Events.scrollEvent.remove('end')
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow transition-all duration-300 ${
        isScrolled ? 'h-16' : 'h-20'
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Cpu className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">HackUni</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.href}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 cursor-pointer
                    ${
                      activeSection === item.href
                        ? 'text-blue-600 bg-blue-100'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }
                    relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600
                    after:transform after:scale-x-0 after:transition-transform after:duration-300
                    hover:after:scale-x-100`}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
