import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component'; 
import { HttpClientModule } from '@angular/common/http'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon/'; 
import { MatDialogModule } from '@angular/material/dialog';
import { CriarPacienteComponent } from './criar-paciente/criar-paciente.component'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table'; 
import { UpdatePacienteComponent } from './update-paciente/update-paciente.component';
import { DialogExclusaoComponent } from './dialog-exclusao/dialog-exclusao.component'


@NgModule({
  declarations: [
    AppComponent,
    ListaPacientesComponent,
    CriarPacienteComponent,
    UpdatePacienteComponent,
    DialogExclusaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

    

}
