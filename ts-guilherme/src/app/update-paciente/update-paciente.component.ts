import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-update-paciente',
  templateUrl: './update-paciente.component.html',
  styleUrls: ['./update-paciente.component.css']
})
export class UpdatePacienteComponent implements OnInit {

  id: number; //id do paciente que será editado
  paciente:Paciente = new Paciente(); //objeto que recebe os dados paciente a ser editado
  constructor(private pacienteService:PacienteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; //recebe o parametro id pela url

    //pega o paciente no banco de dados
    this.pacienteService.pegarPacientePorID(this.id).subscribe(data=>{
      this.paciente = data;
    }, error => console.log(error));
  }

  onSubmit(){

    //pega a data atual para marcar a ultima data de alteração
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    var dataHoje = mm + '-' + dd + '-' + yyyy;

    this.paciente.ultimaAlteracao = dataHoje;

    this.pacienteService.updatePaciente(this.id, this.paciente).subscribe(
      data=>{this.irParaLista()}, error=> console.log(error)
    );
  }
  irParaLista(){
    this.router.navigate(['/pacientes']); //volta para a página contendo a lista
}

}
