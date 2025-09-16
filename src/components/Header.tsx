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
      { 
        name: "Directorio", 
        href: "/institucional/directorio",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
          </svg>
        )
      },
    ]
  },
  { name: "Noticias", href: "/noticias" },
  { name: "Almuerzo de las fuerzas vivas", href: "/almuerzo-fuerzas-vivas" },
  { name: "Beneficios", href: "/beneficios" },
  { name: "Hacete Socio", href: "/socios" },
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
      className="fixed top-0 left-0 right-0 z-[9999] bg-[#091b3f] shadow-md"
      role="banner"
      aria-label="Cámara de Comercio de San Rafael - Navegación principal"
    >
      <nav
  className="mx-auto flex items-center justify-between px-4 py-7"
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
  <div className="hidden xl:flex xl:w-auto xl:order-1 items-center">
          <ul className="flex flex-col font-medium md:flex-row md:space-x-[0.675rem] min-[1476px]:space-x-8 rtl:space-x-reverse items-center m-0 p-0" role="menubar">
            {NAV_ITEMS.map((item) => (
              <li key={item.name} role="none">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <span
                      className="text-white hover:text-[#FF4757] font-medium transition-colors duration-200 px-1.5 min-[1476px]:px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#FF4757] uppercase cursor-pointer flex items-center justify-center text-[15px] min-[1476px]:text-base min-[1800px]:text-lg"
                      role="menuitem"
                      aria-label={item.name}
                      tabIndex={0}
                    >
                      {item.name === "ALMUERZO DE LAS FUERZAS VIVAS" ? (
                        <>
                          <span className="hidden min-[1476px]:inline">ALMUERZO DE LAS FUERZAS VIVAS</span>
                          <span className="min-[1476px]:hidden text-center leading-tight text-xs">
                            ALMUERZO DE LAS<br />FUERZAS VIVAS
                          </span>
                        </>
                      ) : (
                        item.name
                      )}
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
                    className="text-white hover:text-[#FF4757] font-medium transition-colors duration-200 px-1.5 min-[1476px]:px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#FF4757] uppercase flex items-center justify-center text-[15px] min-[1476px]:text-base min-[1800px]:text-lg"
                    role="menuitem"
                    aria-label={item.name}
                  >
                    {item.name === "HACETE SOCIO" ? (
                      <>
                        <span className="hidden min-[1476px]:inline">HACETE SOCIO</span>
                        <span className="min-[1476px]:hidden text-center leading-tight text-xs">
                          HACETE<br />SOCIO
                        </span>
                      </>
                    ) : item.name === "ALMUERZO DE LAS FUERZAS VIVAS" ? (
                      <>
                        <span className="hidden min-[1476px]:inline">ALMUERZO DE LAS FUERZAS VIVAS</span>
                        <span className="min-[1476px]:hidden text-center leading-tight text-xs">
                          ALMUERZO DE LAS<br />FUERZAS VIVAS
                        </span>
                      </>
                    ) : (
                      item.name
                    )}
                  </Link>
                )}
              </li>
            ))}
            {/* Botón Contactanos Desktop */}
            <li className="ml-2 flex items-center" style={{height: '100%'}} role="none">
              <a
                href="https://wa.me/5492604404500"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF4757] hover:bg-[#e13c4a] text-white font-bold px-5 py-2 rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#FF4757] h-full"
                role="menuitem"
                aria-label="Contactanos por WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.64 6L0 24l6.37-1.67A12.09 12.09 0 0012 24c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.1-1.4l-.36-.21-3.78 1 1-3.68-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.28-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                Contactanos
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="xl:hidden flex items-center text-white focus:outline-none focus:ring-2 focus:ring-[#FF4757]"
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
            className="absolute top-full left-0 w-full bg-[#091b3f] xl:hidden z-40"
          >
            <ul className="flex flex-col p-4 space-y-2" role="menu">
              {NAV_ITEMS.map((item) => (
                <li key={item.name} role="none">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full text-left text-white hover:text-[#FF4757] py-2 px-3 rounded transition-colors duration-200 uppercase"
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
                              className="block text-gray-300 hover:text-[#FF4757] py-1 px-3 rounded transition-colors duration-200"
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
                      className="block text-white hover:text-[#FF4757] py-2 px-3 rounded transition-colors duration-200 uppercase"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            {/* Botón Contactanos Mobile */}
            <li className="mt-8 mb-10" role="none">
              <a
                href="https://wa.me/5492604404500"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF4757] hover:bg-[#e13c4a] text-white font-bold py-3 px-5 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#FF4757]"
                role="menuitem"
                aria-label="Contactanos por WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.64 6L0 24l6.37-1.67A12.09 12.09 0 0012 24c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.1-1.4l-.36-.21-3.78 1 1-3.68-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.28-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                Contactanos
              </a>
            </li>
          </div>
        )}
      </nav>
    </header>
  );
}
