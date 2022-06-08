import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesExampleComponent } from './pages/directives-example/directives-example.component';
import { ParentComponent } from './pages/parent/parent.component';

const routes: Routes = [
  {
    path: 'directives-example',
    component: DirectivesExampleComponent,
  },
  {
    path: 'binding',
    component: ParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
