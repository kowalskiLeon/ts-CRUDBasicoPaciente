import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarPacienteComponent } from './criar-paciente/criar-paciente.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { UpdatePacienteComponent } from './update-paciente/update-paciente.component';

//rotas da aplicação, caso o caminho seja vazio, é enviado direto para a lista
const routes: Routes = [
  {
    path: 'pacientes', component: ListaPacientesComponent
  },
  {
    path: 'criar-paciente', component: CriarPacienteComponent
  },
  {
    path: 'update-paciente/:id', component: UpdatePacienteComponent
  },
  {
    path: '', redirectTo:'pacientes', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
