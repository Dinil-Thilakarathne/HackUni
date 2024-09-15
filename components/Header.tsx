"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import { Cpu, Menu, X } from "lucide-react";
import { navItems } from "@/libs/data";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.href);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    Events.scrollEvent.register("end", () => {
      setActiveSection(window.location.hash.slice(1));
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full bg-white shadow transition-all duration-300 ${
        isScrolled ? "h-16" : "h-20"
      }`}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <div className="flex items-center">
          <Cpu className="mr-2 h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">HackUni</span>
        </div>
        <nav className="relative">
          <ul className="hidden space-x-4 md:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.href}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  } relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:transform after:bg-blue-600 after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="relative w-full">
          <div className="fixed inset-0 z-50 max-h-[50vh] w-full bg-white md:hidden">
            <div className="container mx-auto">
              <div className="flex h-20 items-center justify-between px-4">
                <div className="flex items-center">
                  <Cpu className="mr-2 h-8 w-8 text-blue-600" />
                  <span className="text-xl font-bold text-gray-800">
                    HackUni
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Close main menu</span>
                  <X className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <nav className="mt-4">
                <ul className="space-y-2 px-4">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <ScrollLink
                        to={item.href}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={`block rounded-md px-3 py-2 text-base font-medium ${
                          activeSection === item.href
                            ? "bg-blue-100 text-blue-600"
                            : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
