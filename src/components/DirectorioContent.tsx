import Image from "next/image";

interface DirectorMember {
  nombre: string;
  cargo: string;
  empresa?: string;
  foto?: string;
  noFoto?: boolean;
}

const directorio: {
  autoridades: DirectorMember[];
  directoresTitulares: DirectorMember[];
  directoresSuplentes: DirectorMember[];
  comisionesEspecificas: DirectorMember[];
  staff: DirectorMember[];
} = {
  autoridades: [
    {
      nombre: "Gabriel Brega",
      cargo: "Presidente",
      foto: "/images/directorio/gabriel-brega.jpg"
    },
    {
      nombre: "Silvina Pietrelli", 
      cargo: "Vicepresidente I",
      foto: "/images/directorio/silvina-pietrelli.jpg"
    },
    {
      nombre: "Marcos Gianoncelli",
      cargo: "Vicepresidente II", 
      foto: "/images/directorio/marcos-gianoncelli.jpg"
    }
  ],
  directoresTitulares: [
    { nombre: "Naim Yapur", cargo: "Director Titular", foto: "/images/directorio/naim-yapur.avif" },
    { nombre: "Susana Lomoro", cargo: "Director Titular", foto: "/images/directorio/susana-lomoro.avif" },
    { nombre: "Darío Fokszek", cargo: "Director Titular", foto: "/images/directorio/dario-fokszek.avif" },
    { nombre: "José Vázquez", cargo: "Director Titular", foto: "/images/directorio/jose-vazquez.avif" },
    { nombre: "Gustavo Lombard", cargo: "Director Titular", foto: "/images/directorio/gustavo-lombard.avif" },
    { nombre: "Sergio Navarrete", cargo: "Director Titular", foto: "/images/directorio/sergio-navarrete.avif" },
    { nombre: "Andrés Cardiel", cargo: "Director Titular", foto: "/images/directorio/andres-cardiel.avif" },
    { nombre: "Bernardo Mercado", cargo: "Director Titular", foto: "/images/directorio/bernardo-mercado.avif" },
    { nombre: "Carlos Carbó", cargo: "Director Titular", foto: "/images/directorio/carlos-carbo.avif" },
    { nombre: "Juan Pablo Ríos", cargo: "Director Titular", foto: "/images/directorio/juan-pablo-rios.avif" },
    { nombre: "Pablo Guillén", cargo: "Director Titular", foto: "/images/directorio/pablo-guillen.avif" },
    { nombre: "Celina Gómez", cargo: "Director Titular", foto: "/images/directorio/celina-gomez.avif" }
  ],
  directoresSuplentes: [
    { nombre: "Alejandra Oteo", cargo: "Director Suplente", foto: "/images/directorio/alejandra-oteo.avif" },
    { nombre: "José Díaz", cargo: "Director Suplente", foto: "/images/directorio/jose-diaz.avif" },
    { nombre: "Federico Greco", cargo: "Director Suplente", foto: "/images/directorio/federico-greco.avif" },
    { nombre: "Emiliano Andión", cargo: "Director Suplente", noFoto: true }
  ],
  comisionesEspecificas: [
    { nombre: "Mauricio Marín", cargo: "Agricultura", foto: "/images/directorio/mauricio-marin.avif" },
    { nombre: "Juan Chaglasian", cargo: "Bodegueros", noFoto: true },
    { nombre: "Gabriela Fernández", cargo: "Cámara Joven", foto: "/images/directorio/gabriela-fernandez.avif" },
    { nombre: "Nicolás Schmid", cargo: "Comercio", foto: "/images/directorio/nicolas-schmid.avif" },
    { nombre: "Fernando Sombra", cargo: "Construcción", foto: "/images/directorio/fernando-sombra.avif" },
    { nombre: "Gerardo Garino", cargo: "Fundación Ce.D.E.", foto: "/images/directorio/gerardo-garino.avif" },
    { nombre: "Enrique Richard", cargo: "Desarrollo Regional", foto: "/images/directorio/enrique-richard.avif" },
    { nombre: "Eduardo López", cargo: "Ganadería", foto: "/images/directorio/eduardo-lopez.avif" },
    { nombre: "Sofía Romano", cargo: "Industria", foto: "/images/directorio/sofia-romano.avif" },
    { nombre: "Fernando Bonomo", cargo: "Turismo", foto: "/images/directorio/fernando-bonomo.avif" }
  ],
  staff: [
    { nombre: "Alejandro Flores", cargo: "Gerente", noFoto: true },
    { nombre: "Silvina Di Stefano", cargo: "Secretaria", foto: "/images/directorio/silvina-di-stefano.avif" },
    { nombre: "Roberto Bravo", cargo: "Área de Comunicación", foto: "/images/directorio/roberto-bravo.avif" }
  ]
};

function DirectorCard({ member }: { member: DirectorMember }) {
  return (
    <div className="rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[3/4] relative overflow-hidden">
        {member.noFoto ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 relative">
            {/* Gradiente azul oscuro en la parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1428] via-[#0f1e35]/80 to-transparent"></div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <p className="text-sm text-gray-500 font-medium">Foto no disponible</p>
            </div>
            {/* Overlay con nombre y cargo para casos sin foto */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 z-10">
              <h3 className="text-white font-bold text-3xl mb-1">
                {member.nombre}
              </h3>
              <p className="text-white/90 text-lg font-bold">
                {member.cargo}
              </p>
            </div>
          </div>
        ) : (
          <>
            <Image
              src={member.foto || "/images/placeholder-person.jpg"}
              alt={`Foto de ${member.nombre}`}
              fill
              quality={95}
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300 image-render-crisp"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={member.cargo === "Presidente" || member.cargo === "Vicepresidente I" || member.cargo === "Vicepresidente II"}
              style={{
                imageRendering: 'crisp-edges',
                objectPosition: 
                  member.nombre === "Marcos Gianoncelli" ? '75% center' :
                  member.nombre === "Silvina Pietrelli" ? '40% center' :
                  member.nombre === "Gabriel Brega" ? '60% center' :
                  member.nombre === "Susana Lomoro" ? '70% center' :
                  member.nombre === "José Vázquez" ? '55% center' :
                  member.nombre === "Gustavo Lombard" ? '90% center' :
                  member.nombre === "Naim Yapur" ? '60% center' :
                  member.nombre === "Andrés Cardiel" ? '60% center' :
                  member.nombre === "Carlos Carbó" ? '30% center' :
                  member.nombre === "Celina Gómez" ? '80% center' :
                  member.nombre === "Alejandra Oteo" ? '75% center' :
                  member.nombre === "Federico Greco" ? '40% center' :
                  member.nombre === "Nicolás Schmid" ? '85% center' :
                  member.nombre === "Enrique Richard" ? '60% center' :
                  member.nombre === "Sofía Romano" ? '90% center' :
                  member.nombre === "Fernando Bonomo" ? '38% center' :
                  member.nombre === "Eduardo López" ? '30% center' :
                  member.nombre === "Gerardo Garino" ? '55% center' :
                  member.nombre === "Fernando Sombra" ? '60% center' :
                  member.nombre === "Roberto Bravo" ? '30% center' :
                  member.nombre === "Silvina Di Stefano" ? '46% center' :
                  (member.nombre === "Sergio Navarrete" || member.nombre === "Pablo Guillén") ? '80% center' : 
                  'center center'
              }}
            />
            {/* Gradiente azul oscuro en la parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1428] via-[#0f1e35]/80 to-transparent"></div>
            {/* Overlay con nombre y cargo */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 z-10">
              <h3 className="text-white font-bold text-3xl mb-1">
                {member.nombre}
              </h3>
              <p className="text-white/90 text-lg font-bold">
                {member.cargo}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Section({ title, members, columns = "md:grid-cols-3 lg:grid-cols-4" }: { 
  title: string; 
  members: DirectorMember[];
  columns?: string;
}) {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-white mb-8 text-center pb-4">
        {title}
      </h2>
      <div className={`grid grid-cols-1 ${columns} gap-8`}>
        {members.map((member, index) => (
          <DirectorCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
}

export default function DirectorioContent() {
  return (
    <div className="bg-gradient-to-br from-[#0a1428] via-[#0f1e35] to-[#152842] min-h-screen relative overflow-hidden">
      {/* Rectángulos decorativos */}
      <div className="absolute top-8 left-8 w-64 h-32 bg-white/10 rounded-2xl" style={{backdropFilter: 'blur(2px)'}}></div>
      <div className="absolute top-24 right-16 w-96 h-40 bg-white/10 rounded-3xl" style={{backdropFilter: 'blur(2px)'}}></div>
      
      <div className="container mx-auto px-4 py-42 relative z-10">
        {/* Título principal */}
        <div className="text-center mb-32">
          <h1 className="text-5xl font-bold text-white mb-4">
            Directorio <span className="text-[#FF4757]">2025/2026</span>
          </h1>
        </div>

      {/* Autoridades */}
      <Section 
        title="Autoridades" 
        members={directorio.autoridades}
        columns="md:grid-cols-3"
      />

      {/* Línea divisoria */}
      <div className="w-100 h-0.5 bg-[#FF4757] my-16 mx-auto"></div>

      {/* Directores Titulares */}
      <Section 
        title="Directores Titulares" 
        members={directorio.directoresTitulares}
      />

      {/* Línea divisoria */}
      <div className="w-100 h-0.5 bg-[#FF4757] my-12 mx-auto"></div>

      {/* Directores Suplentes */}
      <Section 
        title="Directores Suplentes" 
        members={directorio.directoresSuplentes}
      />

      {/* Línea divisoria */}
      <div className="w-100 h-0.5 bg-[#FF4757] my-12 mx-auto"></div>

      {/* Comisiones Específicas */}
      <Section 
        title="Comisiones Específicas" 
        members={directorio.comisionesEspecificas}
      />

      {/* Línea divisoria */}
      <div className="w-100 h-0.5 bg-[#FF4757] my-12 mx-auto"></div>

        {/* Staff */}
        <Section 
          title="Staff" 
          members={directorio.staff}
          columns="md:grid-cols-3"
        />
      </div>
    </div>
  );
}