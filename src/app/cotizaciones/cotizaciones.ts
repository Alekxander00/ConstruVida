import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-cotizaciones',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './cotizaciones.html',
  styleUrl: './cotizaciones.css',
})
export class Cotizaciones {
  services = [
    {
      title: 'Construcción Nueva',
      description: 'Para proyectos desde cero',
      features: [
        'Diseño arquitectónico',
        'Planos estructurales',
        'Construcción completa',
        'Acabados finales'
      ],
      buttonText: 'Solicitar cotización'
    },
    {
      title: 'Remodelación',
      description: 'Transforma tu espacio actual',
      features: [
        'Diseño de interiores',
        'Demoliciones necesarias',
        'Nuevas instalaciones',
        'Acabados premium'
      ],
      buttonText: 'Solicitar cotización'
    },
    {
      title: 'Mantenimiento',
      description: 'Servicios especializados',
      features: [
        'Reparaciones eléctricas',
        'Plomería y gas',
        'Pintura y acabados',
        'Trabajos en altura'
      ],
      buttonText: 'Solicitar cotización'
    }
  ];

  benefits = [
    {
      icon: '⚡',
      title: 'Respuesta Rápida',
      description: 'Recibe las primeras propuestas en menos de 24 horas'
    },
    {
      icon: '✓',
      title: 'Profesionales Verificados',
      description: 'Solo trabajamos con expertos certificados y con experiencia comprobada'
    },
    {
      icon: '💯',
      title: '100% Gratuito',
      description: 'No pagas nada por solicitar cotizaciones. Sin comisiones ocultas'
    }
  ];
}