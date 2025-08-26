"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Header component for Cámara de Comercio de San Rafael
// Responsive, accessible, con TailwindCSS y Flowbite mega dropdown
const NAV_ITEMS = [
  { name: "Inicio", href: "/" },
  { 
    name: "Institucional", 
    href: "/institucional",
    hasDropdown: true,
    dropdownItems: [
      { 
        name: "Visión, Misión y Valores", 
        href: "/institucional/vision-mision-valores",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        )
      },
      { 
        name: "Historia", 
        href: "/institucional/historia",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        )
      },
    ]
  },
  { name: "Noticias", href: "/noticias" },
  { name: "Almuerzo de las fuerzas vivas", href: "/almuerzo-fuerzas-vivas" },
  { name: "Beneficios", href: "/beneficios" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Importar flowbite después del montaje del componente
    if (typeof window !== 'undefined') {
      import('flowbite').then((flowbite) => {
        flowbite.initFlowbite();
      });
    }
  }, []);

  return (
    <header
      className="sticky top-0 z-50 bg-[#091b3f] shadow-md"
      role="banner"
      aria-label="Cámara de Comercio de San Rafael - Navegación principal"
    >
      <nav
        className="mx-auto flex items-center justify-between px-4 py-6"
        style={{ maxWidth: '100rem' }}
        role="navigation"
        aria-label="Menú principal"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Ir a Inicio">
            <Image
              src="/logos/logo-horizontal-blanco.png"
              alt="Cámara de Comercio de San Rafael"
              width={200}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse" role="menubar">
            {NAV_ITEMS.map((item) => (
              <li key={item.name} role="none">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <span
                      className="text-white hover:text-yellow-400 font-medium transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 uppercase cursor-pointer"
                      role="menuitem"
                      aria-label={item.name}
                      tabIndex={0}
                    >
                      {item.name}
                    </span>
                    
                    {/* Mega Dropdown Menu */}
                    {dropdownOpen && (
                      <>
                        {/* Área invisible para conectar el menú con el dropdown */}
                        <div 
                          className="absolute z-10 w-72 h-4 top-full left-1/2 transform -translate-x-1/2"
                          onMouseEnter={() => setDropdownOpen(true)}
                          onMouseLeave={() => setDropdownOpen(false)}
                        ></div>
                        
                        <div 
                          className="absolute z-10 w-72 text-sm bg-white border border-gray-200 rounded-lg shadow-lg top-full left-1/2 transform -translate-x-1/2 mt-4"
                          onMouseEnter={() => setDropdownOpen(true)}
                          onMouseLeave={() => setDropdownOpen(false)}
                        >
                          {/* Triángulo apuntando hacia arriba - centrado */}
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                          
                          <div className="p-4 relative">
                            <div className="space-y-2">
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-center text-[#091b3f] hover:text-[#091b3f] group transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50"
                                >
                                  <div className="text-[#091b3f] mr-3">
                                    {dropdownItem.icon}
                                  </div>
                                  <span className="font-bold text-sm">{dropdownItem.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:text-yellow-400 font-medium transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 uppercase"
                    role="menuitem"
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-0 w-full bg-[#091b3f] md:hidden z-40"
          >
            <ul className="flex flex-col p-4 space-y-2" role="menu">
              {NAV_ITEMS.map((item) => (
                <li key={item.name} role="none">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full text-left text-white hover:text-yellow-400 py-2 px-3 rounded transition-colors duration-200 uppercase"
                        role="menuitem"
                      >
                        {item.name}
                      </button>
                      {dropdownOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-300 hover:text-yellow-400 py-1 px-3 rounded transition-colors duration-200"
                              onClick={() => setMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white hover:text-yellow-400 py-2 px-3 rounded transition-colors duration-200 uppercase"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
