import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logos/logo-horizontal-blanco.png"
                alt="Cámara de Comercio de San Rafael"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <div className="text-sm text-gray-400 space-y-1 mb-6">
              <p>Avda. El Libertador 78</p>
              <p>Teléfono: 2604 404500</p>
              <p>San Rafael, Mendoza</p>
              <p>C.P. 5.600</p>
            </div>
            
            {/* Redes sociales movidas aquí */}
            <div className="flex space-x-4">
              <a
                href="https://x.com/camarasanrafael"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/camarasanrafael/?hl=es"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/camarasanrafael"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Institucional</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/institucional/vision-mision-valores" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Visión, Misión y Valores
                </Link>
              </li>
              <li>
                <Link href="/institucional/historia" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link href="/institucional/directorio" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Directorio
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/hacete-socio" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Hacete Socio
                </Link>
              </li>
              <li>
                <Link href="/beneficios" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="/almuerzo-fuerzas-vivas" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Almuerzo de las Fuerzas Vivas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto y Noticias */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Información</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="/noticias" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Contacto
                </Link>
              </li>
            </ul>

            <div className="space-y-2 text-sm text-gray-400">
              <p className="font-medium text-white">Emails</p>
              <p>contacto@camarasanrafael.com.ar</p>
              <p>prensa@camarasanrafael.com.ar</p>
              <p>administracion@camarasanrafael.com.ar</p>
            </div>
          </div>
        </div>

        {/* Copyright y créditos */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-1 md:mb-0 text-center">
              © Copyright 2025 Cámara de Comercio de San Rafael
              <span className="block md:inline"> - Todos los derechos reservados</span>
            </p>
            
            <p className="text-gray-400 text-sm">
              Diseñado por KuatroMetric
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
