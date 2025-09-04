"use client";
import { RubroWithCount } from "@/types/beneficio";

// Static icons for rubros (we could make these dynamic in the future)
const RUBRO_ICONS: Record<string, React.ReactNode> = {
  "": (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="w-10 h-10">
      <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm8-92a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-44,0a8,8,0,1,1-8-8A8,8,0,0,1,92,128Zm88,0a8,8,0,1,1-8-8A8,8,0,0,1,180,128Z"></path>
    </svg>
  ),
  "servicios": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-10 h-10">
      <path d="M73.359 128H52.491l-1.347-16.365a48.007 48.007 0 0 1-13.27-5.929l-11.966 10.25-14.736-14.926L21.64 88.502a49.2 49.2 0 0 1-5.25-13.732L.771 73.45l.005-21.078 16.156-1.363a49.159 49.159 0 0 1 5.875-13.469L12.688 25.43l14.739-14.925 12.381 10.609a47.946 47.946 0 0 1 13.528-5.297L54.639 0H75.51l1.348 16.367a48.157 48.157 0 0 1 13.27 5.928l11.969-10.253 14.738 14.925-10.473 12.527a49.262 49.262 0 0 1 5.252 13.736l15.615 1.318-.002 21.078-16.158 1.364a49.161 49.161 0 0 1-5.875 13.469l10.119 12.109-14.738 14.926-12.385-10.61a48.042 48.042 0 0 1-13.525 5.299L73.359 128zm-17.183-4h13.5l1.25-15.146 1.488-.287a44.077 44.077 0 0 0 14.93-5.838l1.244-.771 11.758 10.073 9.566-9.688-9.697-11.604.838-1.246a45.278 45.278 0 0 0 6.48-14.838l.334-1.409 15.359-1.296.002-13.726-14.961-1.264-.281-1.496a45.43 45.43 0 0 0-5.771-15.142l-.738-1.222 9.957-11.912-9.566-9.687-11.455 9.813-1.266-.872a44.25 44.25 0 0 0-14.641-6.557l-1.4-.342L71.826 4H58.324l-1.248 15.145-1.49.288a44.06 44.06 0 0 0-14.931 5.837l-1.244.771-11.756-10.074-9.566 9.687 9.698 11.606-.837 1.246a45.25 45.25 0 0 0-6.482 14.837l-.334 1.41-15.359 1.295-.003 13.725 14.963 1.264.281 1.496a45.268 45.268 0 0 0 5.771 15.137l.74 1.222-9.956 11.914 9.565 9.688 11.452-9.81 1.267.872a44.114 44.114 0 0 0 14.637 6.556l1.403.341L56.176 124z" fill="currentColor"/>
    </svg>
  ),
  "gastronomia": (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-10 h-10">
      <path d="M67 109c-24.3 0-44.1-19.5-44.1-43.5S42.7 22 67 22s44.1 19.5 44.1 43.5S91.4 109 67 109zm0-82.1c-21.6 0-39.2 17.3-39.2 38.6s17.6 38.6 39.2 38.6 39.2-17.3 39.2-38.6S88.6 26.9 67 26.9zm0 68.4c-16.7 0-30.2-13.4-30.2-29.8S50.4 35.8 67 35.8s30.2 13.4 30.2 29.8S83.7 95.3 67 95.3z" fill="currentColor"/>
    </svg>
  ),
  "hogar": (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="w-10 h-10">
      <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
    </svg>
  ),
  "electrodomesticos": (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="w-10 h-10">
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208V80H48ZM208,208H48V96H208V208ZM72,64a8,8,0,1,1,8,8A8,8,0,0,1,72,64Zm32,0a8,8,0,1,1,8,8A8,8,0,0,1,104,64Zm24,48a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,112Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,192Zm16-32a16,16,0,1,1-16-16A16,16,0,0,1,144,160Z"></path>
    </svg>
  ),
};

interface BeneficiosFiltersProps {
  selectedRubro: string;
  onRubroChange: (rubro: string) => void;
  rubros: RubroWithCount[];
}

export default function BeneficiosFilters({ 
  selectedRubro, 
  onRubroChange,
  rubros 
}: BeneficiosFiltersProps) {

  const handleRubroClick = (rubroValue: string) => {
    onRubroChange(rubroValue);
  };

  return (
    <div className="mb-6 bg-gray-100 pt-3 pb-2 px-4 rounded-lg">
      <h2 className="text-3xl font-bold text-[#091b3f] mb-4 text-center">
        Todos los rubros
      </h2>
      
      <div className="grid grid-cols-5 gap-3">
        {rubros.map((rubro) => (
          <button
            key={rubro.value}
            onClick={() => handleRubroClick(rubro.value)}
            className={`
              flex flex-col items-center px-1 py-2 rounded-lg border-2 transition-all duration-200 hover:shadow-md
              ${selectedRubro === rubro.value 
                ? 'border-[#091b3f] bg-white text-gray-900 shadow-md' 
                : 'border-transparent bg-gray-100 text-gray-700 hover:border-[#091b3f] hover:bg-gray-50'
              }
            `}
          >
            <span className="text-xl mb-1">
              {RUBRO_ICONS[rubro.value] || "🏪"}
            </span>
            <span className="text-sm font-medium text-center leading-tight">
              {rubro.label}
              <span className="text-xs text-gray-500 block">({rubro.count})</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
