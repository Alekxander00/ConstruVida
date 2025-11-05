import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'independientes', loadComponent: () => import('./independientes/independientes').then(m => m.Independientes) },
  { path: 'empresas', loadComponent: () => import('./empresas/empresas').then(m => m.Empresas) },
  { path: 'cotizaciones', loadComponent: () => import('./cotizaciones/cotizaciones').then(m => m.Cotizaciones) },
  { path: '**', redirectTo: '' }
];