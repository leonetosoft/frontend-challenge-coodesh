import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteListaComponent } from './paciente/paciente-lista/paciente-lista.component';

const routes: Routes = [
  { path: '', redirectTo: 'paciente/1/all', pathMatch: 'full' },
  { path: 'paciente', component: PacienteListaComponent },
  { path: 'paciente/:page', component: PacienteListaComponent },
  { path: 'paciente/:page/:id', component: PacienteListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
