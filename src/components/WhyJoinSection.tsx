import Link from "next/link";
import Image from "next/image";

export default function WhyJoinSection() {
  // Logos de empresas socias con sus enlaces
  const memberLogos = [
    { name: "Hexámetro", logo: "/images/socios/hexametro.webp", url: "https://hexametro.com.ar/" },
    { name: "Pampa Energía", logo: "/images/socios/pampa.webp", url: "https://pampa.com/" },
    { name: "Plastiandino", logo: "/images/socios/plastiandino.webp", url: "https://www.plastiandino.com/" },
    { name: "Yeso Selenita", logo: "/images/socios/selenita.webp", url: "http://yesoselenita.com/" },
    { name: "Irrigación", logo: "/images/socios/Irrigacion.webp", url: "https://www.irrigacion.gov.ar/web/" },
    { name: "Hierrosan", logo: "/images/socios/hierrosan.webp", url: "https://www.hierrosan.com/" },
    { name: "Municipalidad San Rafael", logo: "/images/socios/Municipalidad.webp", url: "https://www.sanrafael.gov.ar/" },
    { name: "Gobierno de Mendoza", logo: "/images/socios/Gobierno.webp", url: "https://www.mendoza.gov.ar/" },
    { name: "Turismo Buttini", logo: "/images/socios/buttini.webp", url: "https://www.abuttini.com/" },
    { name: "Camiletti", logo: "/images/socios/Camiletti-Inicio.webp", url: "http://camilettisa.com/" },
    { name: "U.E.C", logo: "/images/socios/uec.png", url: "https://www.facebook.com/UECSanRafael/?locale=es_LA" },
    { name: "Nazca Obras Civiles", logo: "/images/socios/nazca.jpg", url: "https://www.instagram.com/nazcaobrasciviles/" },
    { name: "Finca los Alamos", logo: "/images/socios/los_dos_alamos.jpg", url: "https://bombalyaldao.com.ar/finca-los-alamos/?v=47f45e65244c" },
    { name: "Lorenzo Automotores", logo: "/images/socios/lorenzo.jpg", url: "https://lorenzoautomotores.com.ar/" },
    { name: "Linkin", logo: "/images/socios/linkin.jpg", url: "https://web.linkingpos.com/" },
    { name: "Constructora Horizonte S.A", logo: "/images/socios/horizonte.jpg", url: "https://www.instagram.com/constructora_horizonte_sa/" },
    { name: "Hiper Cerámico", logo: "/images/socios/hiper_ceramico.jpg", url: "https://hiperceramico.com.ar/" },
    { name: "El Encuentro", logo: "/images/socios/el_encuentro.jpg", url: "https://www.instagram.com/elencuentromayorista/?hl=es-la" },
    { name: "Banco Credicoop", logo: "/images/socios/credicoop.jpg", url: "https://www.bancocredicoop.coop/personas" },
    { name: "Maderera Lopez", logo: "/images/socios/Maderera-Lopez.jpg", url: "https://www.facebook.com/madereralopezsr/?locale=es_LA" },
    { name: "Calzados Los Gallegos", logo: "/images/socios/LOS-GALLEGOS.jpg", url: "https://www.calzadoslosgallegos.com.ar/" },
    { name: "Iselín Envíos", logo: "/images/socios/Iselin.jpg", url: "https://www.iselin.com.ar/" },
    { name: "Grupo Dial", logo: "/images/socios/GRUPO_DIAL.jpg", url: "https://grupodial.com/" },
    { name: "Diario Mendoza Sur", logo: "/images/socios/DIARIO_MENDOZA_SUR.jpg", url: "https://www.diariomendozasur.com/" },
    { name: "Dial Radio TV", logo: "/images/socios/DIAL-RADIO-TV.jpg", url: "https://grupodial.com/index.php/dial-radio-tv/" },
    { name: "Vittec", logo: "/images/socios/Vittec-Inicio.jpg", url: "https://vittec.odoo.com/" },
    { name: "PROCALC S.A", logo: "/images/socios/Procalc-Inicio.jpg", url: "https://www.instagram.com/procalcs.a/" },
    { name: "Ganadera del Sur", logo: "/images/socios/Ganadera-del-Sur-Inicio.jpg", url: "https://ganaderadelsur.com.ar/" },
    { name: "FAS Electricidad", logo: "/images/socios/Fas-Inicio.jpg", url: "https://www.instagram.com/faselectricidad/?hl=es-la" },
    { name: "Cereales El Diamante", logo: "/images/socios/El-Diamante-Inicio.jpg", url: "https://www.facebook.com/cerealeseldiamante/?locale=es_LA" },
    { name: "Corporación del Sur", logo: "/images/socios/Corporacion-del-Sur-Inicio-4.jpg", url: "https://corporaciondelsur.com/" },
    { name: "CTNET", logo: "/images/socios/CTC-Inicio.jpg", url: "https://www.cabletelevisoracolor.com/" },
    { name: "Bodegas Bianchi", logo: "/images/socios/Bianchi-Inicio.jpg", url: "https://www.bodegasbianchi.com.ar/" },
  ];

  const benefits = [
    {
      icon: "🤝",
      title: "Representación Institucional",
      description: "Tu voz ante gobiernos e instituciones locales, provinciales y nacionales"
    },
    {
      icon: "💼",
      title: "Networking Empresarial",
      description: "Conecta con +650 empresas y amplía tu red de contactos comerciales"
    },
    {
      icon: "📈",
      title: "Beneficios Exclusivos",
      description: "Acceso a descuentos y promociones especiales en servicios y productos"
    },
    {
      icon: "🎓",
      title: "Capacitación Continua",
      description: "Cursos, seminarios y jornadas de actualización empresarial"
    },
    {
      icon: "⚖️",
      title: "Asesoramiento Especializado",
      description: "Consultoría legal, contable y en comercio internacional"
    },
    {
      icon: "🌍",
      title: "Proyección Internacional",
      description: "Oportunidades de exportación y desarrollo de mercados externos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full px-0">
        
        {/* Header */}
        <div className="text-center mb-16 px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091b3f] mb-6">
            Empresas Asociadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Únete a más de <strong>650 empresas</strong> que confían en nosotros para crecer, 
            innovar y liderar el desarrollo económico de San Rafael
          </p>
        </div>

        {/* Empresas Socias */}
        <div className="mb-16">
          {/* Marquees infinitos - 3 filas */}
          <div className="space-y-4 overflow-hidden max-w-full px-2">
            {/* Fila 1 - Marquee */}
            <div className="overflow-hidden max-w-full">
              <div className="flex animate-marquee max-w-full">
              {memberLogos.slice(0, 11).map((company, index) => (
                <div key={index} className="flex-shrink-0 mx-4 rounded-lg p-4 transition-all duration-300 flex items-center justify-center h-32 max-w-[110px] sm:max-w-none">
                  <Link href={company.url} target="_blank" rel="noopener noreferrer">
                    <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg border border-[#091b3f] p-0.2">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={80}
                        quality={100}
                        unoptimized={true}
                        priority={index < 5}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </Link>
                </div>
              ))}
              {/* Duplicar para efecto infinito */}
              {memberLogos.slice(0, 11).map((company, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4 rounded-lg p-4 transition-all duration-300 flex items-center justify-center h-32 max-w-[110px] sm:max-w-none">
                  <Link href={company.url} target="_blank" rel="noopener noreferrer">
                    <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg border border-[#091b3f] p-0.2">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={80}
                        quality={100}
                        unoptimized={true}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Fila 2 - Marquee (dirección opuesta) */}
            <div className="overflow-hidden max-w-full">
              <div className="flex animate-marquee-reverse max-w-full">
              {memberLogos.slice(11, 22).map((company, index) => (
                <div key={index} className="flex-shrink-0 mx-4 rounded-lg p-4 transition-all duration-300 flex items-center justify-center h-32 max-w-[110px] sm:max-w-none">
                  <Link href={company.url} target="_blank" rel="noopener noreferrer">
                    <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg border border-[#091b3f] p-0.2">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={80}
                        quality={100}
                        className={`w-full h-full rounded-full ${
                          company.logo.includes('uec.jpg') ? 'object-contain scale-75' : 'object-cover'
                        }`}
                      />
                    </div>
                  </Link>
                </div>
              ))}
              {/* Duplicar para efecto infinito */}
              {memberLogos.slice(11, 22).map((company, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4 rounded-lg p-4 transition-all duration-300 flex items-center justify-center h-32 max-w-[110px] sm:max-w-none">
                  <Link href={company.url} target="_blank" rel="noopener noreferrer">
                    <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg border border-[#091b3f] p-0.2">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={80}
                        quality={100}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Fila 3 - Marquee */}
            <div className="overflow-hidden max-w-full">
              <div className="flex animate-marquee max-w-full">
              {memberLogos.slice(22, 33).map((company, index) => (
                <div key={index} className="flex-shrink-0 mx-4 rounded-lg p-4 transition-all duration-300 flex items-center justify-center h-32 max-w-[110px] sm:max-w-none">
                  <Link href={company.url} target="_blank" rel="noopener noreferrer">
                    <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg border border-[#091b3f] p-0.2">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={80}
                        quality={100}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </Link>
                </div>
              ))}
              {/* Duplicar para efecto infinito */}
              {memberLogos.slice(22, 33).map((company, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4 rounded-lg p-4 transition-all duration-300 flex items-center justify-center h-32 max-w-[110px] sm:max-w-none">
                  <Link href={company.url} target="_blank" rel="noopener noreferrer">
                    <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg border border-[#091b3f] p-0.2">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={80}
                        quality={100}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-4">
              Y muchas empresas más que forman parte de nuestra comunidad empresarial
            </p>
          </div>
        </div>



        {/* Call to Action */}
        <div className="relative rounded-3xl mx-8 px-8 py-20 md:py-28 text-center overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <img 
              src="/images/institucional/hero-historia2.jpg"
              alt="Imagen histórica representativa de la Cámara de Comercio de San Rafael"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 70%' }}
            />
            {/* Overlay para legibilidad */}
            <div className="absolute inset-0 bg-[#091b3f]/80"></div>
          </div>
          {/* Rectángulos decorativos reposicionados */}
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              ¿Listo para formar parte?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Únete a la comunidad empresarial más importante de San Rafael y potencia el crecimiento de tu empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contacto"
                className="bg-[#FF4757] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e13c4a] transition-colors duration-200 inline-flex items-center justify-center"
              >
                Quiero ser socio
                <span className="ml-2">→</span>
              </Link>
              <Link 
                href="/beneficios"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:border-[#FF4757] hover:text-[#FF4757] transition-all duration-200 inline-flex items-center justify-center"
              >
                Ver todos los beneficios
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

