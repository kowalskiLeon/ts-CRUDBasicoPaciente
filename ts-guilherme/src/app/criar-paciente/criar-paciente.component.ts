import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import {PacienteService} from '../paciente.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-criar-paciente',
  templateUrl: './criar-paciente.component.html',
  styleUrls: ['./criar-paciente.component.css']
})
export class CriarPacienteComponent implements OnInit {

paciente: Paciente = new Paciente(); //paciente que será adicionado ao banco

  constructor(private pacienteService : PacienteService, private router : Router) { 



  }

  ngOnInit(): void {
  }

  //função de submissão de formulário
  onSubmit(){

    /*

    Adquirir data de hoje:

    */
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    var dataHoje = mm + '-' + dd + '-' + yyyy;

    this.paciente.ultimaAlteracao = dataHoje;
    this.paciente.dataInsercao = this.paciente.ultimaAlteracao;
    console.log(this.paciente);
    this.salvarPaciente();
    

  }

  salvarPaciente(){

    //salvar paciente criado

    this.pacienteService.criarPaciente(this.paciente).subscribe(data =>{
        console.log(data)
        this.irParaLista()
    }, error => console.log(error)
    )
  }

  //retorna a rota da lista
  irParaLista(){
      this.router.navigate(['/pacientes']);
  }



}
