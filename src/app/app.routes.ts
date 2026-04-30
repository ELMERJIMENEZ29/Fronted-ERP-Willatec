import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { authGuard } from './core/guards/auth-guard';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  { 
    path: 'login', 
    component: Login 
  },
  {
    path:'',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./features/dashboard/dashboard')
          .then(m => m.Dashboard)
      },
{
  path: 'productos',
  loadComponent: () =>
    import('./features/productos/pages/productos/productos')
      .then(m => m.Productos)
},
{
  path: 'usuarios',
  loadComponent: () =>
    import('./features/usuarios/pages/usuarios/usuarios')
      .then(m => m.Usuarios)
}
    ]
  },
  { 
    path: '**', 
    redirectTo: '/login', 
  },
];
