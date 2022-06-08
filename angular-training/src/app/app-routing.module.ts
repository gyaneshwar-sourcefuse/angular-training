import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesExampleComponent } from './pages/directives-example/directives-example.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {
    path: 'directives-example',
    component: DirectivesExampleComponent,
  },
  {
    path: 'binding',
    component: ParentComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: '',
    redirectTo: '/binding',
    pathMatch: 'full',
  },
  {
    path: 'lazy-loading',
    loadChildren: () =>
      import('./pages/lazy-loading/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
