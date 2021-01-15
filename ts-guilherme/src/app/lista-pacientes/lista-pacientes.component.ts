import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Paciente } from '../paciente';
import {PacienteService} from '../paciente.service'
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialog, MatDialogModule} from '@angular/material/dialog'; 
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DialogExclusaoComponent } from '../dialog-exclusao/dialog-exclusao.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit, AfterViewInit {

pacientes: Paciente[]; //lista de pancientes que recebe os dados do banco
dataSource: MatTableDataSource<Paciente>;  //datasource utilizado para amostragem dos dados em tabela
procura: string = ''; //termo de busca para filtragem de pacientes
displayedColumns: string[] = ['nome', 'nascimento', 'sexo', 'hospital', 'motivo', 'editar', 'excluir']; //colunas que são mostradas na tabela



  constructor(private pacienteService: PacienteService, private router : Router, private dialog:MatDialog, ) {

   }

   

  ngOnInit(): void {
    this.getPacientes();
  }

  //retorna a lista de pacientes presentes no banco de dados

  private getPacientes(){
    this.pacienteService.adquirirLista().subscribe(data => {
      this.pacientes = data;
      this.dataSource = new MatTableDataSource(this.pacientes);
    });
    
  }

//abre a tela para edição de dados de um paciente já cadastrado

  editarPaciente(id: number){
    this.router.navigate(['/update-paciente/'+id]);
  }

  
  /* retorna um paciente de acordo com seu identificador. Utilizado para 
    mostrar os dados do paciente durante a tela de exclusão
  */
  private retornarPacientePorID(id: number) : Paciente{
    var p = this.pacientes[0];
    this.pacientes.forEach(element => {
      if(element.identificador == id) p = element;
    });
    return p;
  }


  /*
  Função que abre o dialogo para deletar os pacientes
  */

   deletePaciente(id:number){

    let dialogRef = this.dialog.open(DialogExclusaoComponent);
    dialogRef.componentInstance.paciente = this.retornarPacientePorID(id);

    dialogRef.afterClosed().subscribe(result =>{
      console.log(result)
      if(result == 'true'){
        this.deletar(id);
      }

    });
  }

  //deleta um paciente da lista de acordo com seu ID

  private deletar(id: number){
    this.pacienteService.deletarPaciente(id).subscribe(data => {
      console.log(data);
      this.getPacientes();
    });
  }


  ngAfterViewInit() {
   
  }

  //listener que realiza a função de filtro toda vez que o campo de busca é utilizado

  @HostListener('input') oninput() {
    this.filtrarBusca();
    if(this.procura == '') this.dataSource = new MatTableDataSource(this.pacientes);
  }


/*função responsavel por mostrar os resultados das buscas de acordo com a entrada
na página contendo a lista*/

  filtrarBusca() {
    var pacitemp: Paciente[] = [];
    this.pacientes.forEach(element => {
      var controle = false;
      const index = pacitemp.indexOf(element, 0)
      if(element.nome.includes(this.procura) == true)controle = true;
      else if(element.nascimento.includes(this.procura) == true) controle = true;
      else if(element.hospital.includes(this.procura) == true) controle = true;
      else if(element.motivo.includes(this.procura) == true) controle = true;
      if(controle){
        console.log("add:" + element);
        pacitemp.push(element);
      }
    });
    console.log(pacitemp);
    this.dataSource = new MatTableDataSource(pacitemp);

  }


}
