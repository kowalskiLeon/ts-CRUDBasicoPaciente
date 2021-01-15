package com.example.demo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
 * Classe contendo as funcoes basicas de trabalho com a tabela do banco de dados contendo os pacientes
 */


@RestController
@RequestMapping("/api/v1/")
public class ControladorPacientes {

	@Autowired
	private PacientesRep pacientesRep; //repositorio dos pacientes
	
	@GetMapping("/pacientes")
	public List<Paciente> retornarTodosPacientes(){ //função responsavel por retornar toda a lista de pacientes
		return pacientesRep.findAll();
	}
	
	@PostMapping("/pacientes")
	public Paciente criarPacienteNovo(@RequestBody Paciente paciente) { //funcao responsavel por adicionar um novo
		return pacientesRep.save(paciente);								//paciente ao banco de dados
	}
	
	
	//retorna um paciente ja existe na lista de acordo com seu ID
	public Paciente pegarPaciente(int id) {
		return pacientesRep.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Paciente não encontrado com a id "+ id + "!" ));
	}
	
	//retorna o paciente obtido
	@GetMapping("/pacientes/{id}")
	public ResponseEntity<Paciente> retornarPacientePeloID(@PathVariable int id) {
		Paciente p = pegarPaciente(id);
		return ResponseEntity.ok(p);
		
	}
	
	//edita um paciente já existente
	@PutMapping("/pacientes/{id}")
	public ResponseEntity<Paciente> editarPaciente(@PathVariable int id, @RequestBody Paciente detalhes){
		Paciente temp = pegarPaciente(id);
		temp.setNome(detalhes.getNome());
		temp.setNascimento(detalhes.getNascimento());
		temp.setSexo(detalhes.getSexo());
		temp.setDataInsercao(detalhes.getDataInsercao());
		temp.setHospital(detalhes.getHospital());
		temp.setMotivo(detalhes.getMotivo());
		temp.setUltimaAlteracao(detalhes.getUltimaAlteracao());
		
		Paciente updated = pacientesRep.save(temp);
		
		return ResponseEntity.ok(updated);
	}
	
	//deleta um paciente
	@DeleteMapping("/pacientes/{id}")
	public ResponseEntity<Map<String, Boolean>> deletarPaciente(@PathVariable int id){
		Paciente exc = pegarPaciente(id);
		pacientesRep.delete(exc);
		Map<String, Boolean> resposta = new HashMap<>();
		resposta.put("deletado", Boolean.TRUE);
		return ResponseEntity.ok(resposta);
	}
	
}
