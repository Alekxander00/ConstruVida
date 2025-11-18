import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  // Tu número de WhatsApp (sin espacios, con código de país sin el +)
  // Ejemplo: 573001234567 para Colombia
  whatsappNumber = '573195752917'; // CAMBIA ESTE NÚMERO POR EL TUYO
  
  // Mensaje predeterminado que aparecerá en WhatsApp
  whatsappMessage = 'Hola, me gustaría solicitar una cotización gratuita para mi proyecto de construcción.';

  features = [
    {
      icon: '🏗️',
      title: 'Planificación Profesional',
      description: 'Diseñamos tu proyecto desde cero con los mejores especialistas'
    },
    {
      icon: '📐',
      title: 'Diseño Personalizado',
      description: 'Soluciones adaptadas a tus necesidades y presupuesto'
    },
    {
      icon: '👷',
      title: 'Ejecución Garantizada',
      description: 'Coordinamos todos los procesos con profesionales certificados'
    },
    {
      icon: '⏱️',
      title: 'Cumplimiento de Plazos',
      description: 'Entregas puntuales con seguimiento continuo'
    },
    {
      icon: '💰',
      title: 'Transparencia Total',
      description: 'Presupuestos claros sin sorpresas'
    },
    {
      icon: '🛡️',
      title: 'Calidad Asegurada',
      description: 'Materiales de primera y acabados perfectos'
    }
  ];

  cards = [
    {
      image: 'assets/proyecto1.jpg',
      title: 'Vivienda Unifamiliar',
      description: 'Diseño moderno con espacios optimizados para familia',
      date: '15 Ene 2024',
      category: 'Residencial'
    },
    {
      image: 'assets/proyecto2.jpg',
      title: 'Edificio Multifamiliar',
      description: 'Proyecto sostenible con áreas comunes',
      date: '22 Feb 2024',
      category: 'Comercial'
    },
    {
      image: 'assets/proyecto3.jpg',
      title: 'Oficinas Corporativas',
      description: 'Espacios de trabajo modernos y eficientes',
      date: '10 Mar 2024',
      category: 'Corporativo'
    },
    {
      image: 'assets/proyecto4.jpg',
      title: 'Centro Comercial',
      description: 'Diseño comercial con alta circulación',
      date: '05 Abr 2024',
      category: 'Comercial'
    },
    {
      image: 'assets/proyecto5.jpg',
      title: 'Hospital Regional',
      description: 'Infraestructura médica de última generación',
      date: '18 May 2024',
      category: 'Institucional'
    },
    {
      image: 'assets/proyecto6.jpg',
      title: 'Escuela Primaria',
      description: 'Espacios educativos seguros y funcionales',
      date: '30 Jun 2024',
      category: 'Educativo'
    }
  ];

  currentPage = 1;
  itemsPerPage = 6;

  get paginatedCards() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.cards.slice(start, end);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.cards.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  get totalPages() {
    return Math.ceil(this.cards.length / this.itemsPerPage);
  }

  get pages() {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }

  // Método para generar el enlace de WhatsApp
  get whatsappLink() {
    const encodedMessage = encodeURIComponent(this.whatsappMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }

  // Método alternativo si prefieres abrir WhatsApp con un click
  openWhatsApp() {
    window.open(this.whatsappLink, '_blank');
  }
}