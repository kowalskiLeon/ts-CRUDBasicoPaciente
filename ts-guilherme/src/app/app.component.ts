import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ts-guilherme';
  usuario: string;
  senha: string;
  tempUsuario:string;
  tempSenha: string;
  loginName: string;

    constructor() {
      this.usuario = '';
      this.senha = '';
      this.loginName = '';
      this.tempSenha = '12345';
      this.tempUsuario = 'admin';
     }

  onSubmit(){
    if(this.usuario==this.tempUsuario && this.senha == this.tempSenha){
      console.log("Senha inserida corretamente!")
      this.loginName = 'Administrador';
    }
  }
}
