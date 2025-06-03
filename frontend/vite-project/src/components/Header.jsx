import React, { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);//스크롤 하는지 usestate
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);//navbar 메뉴

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black"
          : " bg-gradient-to-b from-white/90 to-transparent "
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between px-4 lg:px-8 h-16 lg:h-20 bg-black shadow-md">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-white font-medium tracking-wide">
            <NavItem label="EVENTS" />
            <NavItem label="RANKINGS" />
            <NavItem label="ATHLETES" />
            <NavItem label="NEWS" />
          </nav>

          {/* Logo Centered */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center justify-center group">
              <span className="italic text-white font-extrabold text-3xl tracking-wide transition-all duration-300  group-hover:underline decoration-2 underline-offset-4 decoration-red-600">
                UFC
              </span>
            </a>
          </div>

          {/* Desktop Right Nav */}
          <nav className="hidden lg:flex items-center space-x-6 text-white font-medium tracking-wide">
            <NavItem label="CONNECT" />
            <NavItem label="WATCH" />
            <NavItem label="SHOP" />
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-red-600 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>

            <button
              className="lg:hidden text-white hover:text-red-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-transform duration-300 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <span className="text-white font-bold text-2xl">UFC</span>
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4">
          <MobileNavItem label="EVENTS" />
          <MobileNavItem label="ATHLETES" />
          <MobileNavItem label="RANKINGS" />
          <MobileNavItem label="WATCH" />
          <MobileNavItem label="NEWS" />
          <MobileNavItem label="CONNECT" />
        </nav>
      </div>
    </header>
  );
};

const NavItem = ({ label }) => (
  <div className="relative group">
    <Link
      href="#"
      className="text-white hover:text-red-600 font-medium flex items-center transition-colors"
    >
      {label}
      <ChevronDown className="ml-1 w-4 h-4" />
    </Link>
    <div className="absolute left-0 pt-2 w-48 hidden group-hover:block">
      <div className="bg-black shadow-lg rounded">
        <div className="py-2">
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-white hover:bg-red-600 hover:text-white"
          >
            Submenu Item 1
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-white hover:bg-red-600 hover:text-white"
          >
            Submenu Item 2
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-white hover:bg-red-600 hover:text-white"
          >
            Submenu Item 3
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const MobileNavItem = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2 border-b border-gray-800">
      <button
        className="w-full flex justify-between items-center text-white py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-2 pl-4 space-y-2">
          <Link href="#" className="block py-2 text-gray-400 hover:text-white">
            Submenu Item 1
          </Link>
          <Link href="#" className="block py-2 text-gray-400 hover:text-white">
            Submenu Item 2
          </Link>
          <Link href="#" className="block py-2 text-gray-400 hover:text-white">
            Submenu Item 3
          </Link>
        </div>
      )}
    </div>
  );
  
};

export default Header