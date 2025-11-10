import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-independientes',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './independientes.html',
  styleUrl: './independientes.css',
})
export class Independientes {
  filters = [
    { name: 'Todos', active: true },
    { name: 'Maestros de Obra', active: false },
    { name: 'Electricistas', active: false },
    { name: 'Plomeros', active: false },
    { name: 'Carpinteros', active: false },
    { name: 'Pintores', active: false },
    { name: 'Arquitectos', active: false },
    { name: 'Ingenieros', active: false }
  ];

  professionals = [
    {
      id: 1,
      name: 'Juan Carlos Pérez',
      specialty: 'Maestro de Obra',
      description: 'Más de 15 años de experiencia en construcción residencial y comercial. Especializado en acabados de lujo.',
      rating: '4.9',
      location: 'Bogotá'
    },
    {
      id: 2,
      name: 'María González',
      specialty: 'Electricista Certificada',
      description: 'Instalaciones eléctricas residenciales e industriales. Certificada en sistemas de energía solar.',
      rating: '5.0',
      location: 'Medellín'
    },
    {
      id: 3,
      name: 'Carlos Rodríguez',
      specialty: 'Plomero Experto',
      description: 'Especialista en reparaciones y mantenimiento de sistemas hidráulicos. Disponibilidad 24/7.',
      rating: '4.8',
      location: 'Cali'
    },
    {
      id: 4,
      name: 'Ana Martínez',
      specialty: 'Carpintera',
      description: 'Muebles a medida y trabajos en madera. Diseños personalizados modernos y funcionales.',
      rating: '4.9',
      location: 'Barranquilla'
    },
    {
      id: 5,
      name: 'Luis Hernández',
      specialty: 'Pintor Profesional',
      description: 'Pintura interior y exterior, texturas decorativas. Trabajos limpios y acabados perfectos.',
      rating: '4.7',
      location: 'Cartagena'
    },
    {
      id: 6,
      name: 'Sofía López',
      specialty: 'Arquitecta',
      description: 'Diseño arquitectónico y planos para proyectos residenciales. Asesoría en remodelaciones.',
      rating: '5.0',
      location: 'Tunja'
    },
    {
      id: 7,
      name: 'Diego Torres',
      specialty: 'Soldador Industrial',
      description: 'Soldadura especializada en estructuras metálicas y acero inoxidable. Certificado internacional.',
      rating: '4.8',
      location: 'Bucaramanga'
    },
    {
      id: 8,
      name: 'Patricia Ruiz',
      specialty: 'Diseñadora de Interiores',
      description: 'Transformo espacios en ambientes únicos. Especializada en estilo minimalista y contemporáneo.',
      rating: '4.9',
      location: 'Pereira'
    },
    {
      id: 9,
      name: 'Roberto Gómez',
      specialty: 'Albañil Maestro',
      description: 'Construcción de muros, mampostería y acabados. 20 años de experiencia en el sector.',
      rating: '4.6',
      location: 'Manizales'
    },
    {
      id: 10,
      name: 'Camila Vargas',
      specialty: 'Ingeniera Civil',
      description: 'Diseño estructural y supervisión de obras. Especializada en proyectos residenciales.',
      rating: '5.0',
      location: 'Bogotá'
    },
    {
      id: 11,
      name: 'Fernando Silva',
      specialty: 'Techador Experto',
      description: 'Instalación y reparación de techos. Especialista en impermeabilización y cubiertas.',
      rating: '4.7',
      location: 'Ibagué'
    },
    {
      id: 12,
      name: 'Andrea Morales',
      specialty: 'Instaladora de Pisos',
      description: 'Instalación de todo tipo de pisos: porcelanato, madera y cerámica. Acabados impecables.',
      rating: '4.8',
      location: 'Pasto'
    }
  ];

  currentPage = 1;
  itemsPerPage = 6; // 3x2 grid

  get paginatedProfessionals() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.professionals.slice(start, end);
  }

  goToPage(page: number) {
    this.currentPage = page;
    // Scroll suave al inicio de la sección
    window.scrollTo({ top: 400, behavior: 'smooth' });
  }

  get totalPages() {
    return Math.ceil(this.professionals.length / this.itemsPerPage);
  }

  get pages() {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }

  toggleFilter(selectedFilter: any) {
    // Desactivar todos los filtros
    this.filters.forEach(filter => filter.active = false);
    // Activar el filtro seleccionado
    selectedFilter.active = true;
    // Aquí puedes agregar lógica para filtrar los profesionales
  }
}