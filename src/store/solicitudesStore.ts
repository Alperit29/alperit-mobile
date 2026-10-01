import { create } from "zustand";

export type Solicitud = {
  id: number;
  marca: string;
  modelo: string;
  anio: string;
  nombre: string;
  telefono: string;
  observaciones: string;
  estado: string;
};

type SolicitudesStore = {
  solicitudes: Solicitud[];
  agregarSolicitud: (solicitud: Solicitud) => void;
};

export const useSolicitudesStore = create<SolicitudesStore>((set) => ({
  solicitudes: [],

  agregarSolicitud: (solicitud) =>
    set((state) => ({
      solicitudes: [...state.solicitudes, solicitud],
    })),
}));
