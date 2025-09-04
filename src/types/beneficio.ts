export interface Beneficio {
  _id: string;
  empresa: string;
  logo?: {
    asset: {
      _ref: string;
      url?: string;
    };
    alt?: string;
  };
  rubro: string;
  beneficio: string;  // Nombre del beneficio específico
  descripcion: string;
  porcentaje?: number;  // Porcentaje de descuento
  sitioWeb?: string;
  instagram?: string;
  facebook?: string;
  whatsapp?: string;
  destacado?: boolean;
  activo?: boolean;
  fechaCreacion?: string;
  orden?: number;
}

export interface RubroWithCount {
  value: string;
  label: string;
  count: number;
}
