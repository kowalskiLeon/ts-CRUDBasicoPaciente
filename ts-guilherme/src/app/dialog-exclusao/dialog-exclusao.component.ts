import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-dialog-exclusao',
  templateUrl: './dialog-exclusao.component.html',
  styleUrls: ['./dialog-exclusao.component.css']
})
export class DialogExclusaoComponent implements OnInit {

  
  constructor() {

   }

  paciente : Paciente;

  ngOnInit(): void {
  }

}
