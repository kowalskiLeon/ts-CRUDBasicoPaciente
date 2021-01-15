import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders   } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Paciente } from './paciente';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = 'http://localhost:8080/api/v1/pacientes'; //url utilizado para acessos ao banco de dados

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) { }


  //função get para obter todos os dados da lista de pacientes
  adquirirLista(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(this.baseURL).pipe(
      retry(2),
      catchError(this.handleError))
  }

  //display de possiveis erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

  //adição de um paciente ao banco de dados
  criarPaciente(paciente: Paciente): Observable<Object>{
      return this.httpClient.post(this.baseURL, paciente)
  }
  //retorno de um paciente ja existente no banco por id
  pegarPacientePorID(id: number): Observable<Paciente>{
    return this.httpClient.get<Paciente>(this.baseURL+"/"+id);
  }
  //edição de um paciente já existente no banco
  updatePaciente(id: number, paciente: Paciente){
    return this.httpClient.put(this.baseURL+"/"+id, paciente)
  }
  //exclusão de um paciente
  deletarPaciente(id: number){
    return this.httpClient.delete(this.baseURL+"/"+id)
  }

}
