import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ),
    // canActivate: [authGuard], // Protect this route
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'tender-opportunity',
        loadComponent: () =>
          import(
            './features/tender-opportunity/tender-opportunity.component'
          ).then((m) => m.TenderOpportunityComponent),
      },
      {
        path: 'contract',
        loadComponent: () =>
          import('./features/contract/contract.component').then(
            (m) => m.ContractComponent
          ),
      },
      // Add other feature routes here
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
