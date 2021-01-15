/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo;

/**
 *
 * @author Guilherme de Andrade Moura
 * 
 * @desc Classe que identifica cada paciente
 * 
 */

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pacientes")
public class Paciente {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int identificador; //julguei necessario para que haja pelo menos um atributo chave para cada paciente;
	
	@Column(name = "nome")
	private String nome; // nome do paciente
	
	@Column(name = "nascimento")
	private String nascimento; //data de nascimento - dd/mm/aaaa
	
	@Column(name = "sexo")
	private int sexo; // 0 - masculino, 1 -  feminino
	
	@Column(name = "hospital")
	private String hospital; //hospital onde ocorreu a internação
	
	@Column(name = "motivo")
    private String motivo; //descrição do motivo pelo qual o paciente foi internado
	
	@Column(name = "dataInsercao")
    private String dataInsercao; //data em que essa instância foi inserida no banco de dados
	
	@Column(name = "ultimaAlteracao")
    private String ultimaAlteracao; //data em que essa instância foi aletarada pela ultima vez

    
    /*
    
    Construtores da Classe
    
    */
    
    public Paciente() {
    }

    public Paciente(String nome, String nascimento, int sexo, String hospital, String motivo, String dataInsercao, String ultimaAlteracao) {
        super();
        this.nome = nome;
        this.nascimento = nascimento;
        this.sexo = sexo;
        this.hospital = hospital;
        this.motivo = motivo;
        this.dataInsercao = dataInsercao;
        this.ultimaAlteracao = ultimaAlteracao;
    }
    
    public String retornarDadosPaciente(){
        return this.identificador + " " + this.nome  + " " + this.nascimento  + " " + 
                this.sexo  + " " + this.hospital  + " " + 
                this.motivo  + " " + this.dataInsercao  + " " + ultimaAlteracao;
    }
    
    

    /*
    
    Getters e Setters desta classe
    
    */
    
    public int getIdentificador() {
        return identificador;
    }

    public void setIdentificador(int identificador) {
        this.identificador = identificador;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNascimento() {
        return nascimento;
    }

    public void setNascimento(String nascimento) {
        this.nascimento = nascimento;
    }

    public int getSexo() {
        return sexo;
    }

    public void setSexo(int sexo) {
        this.sexo = sexo;
    }

    public String getHospital() {
        return hospital;
    }

    public void setHospital(String hospital) {
        this.hospital = hospital;
    }

    public String getMotivo() {
        return motivo;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public String getDataInsercao() {
        return dataInsercao;
    }

    public void setDataInsercao(String dataInsercao) {
        this.dataInsercao = dataInsercao;
    }

    public String getUltimaAlteracao() {
        return ultimaAlteracao;
    }

    public void setUltimaAlteracao(String ultimaAlteracao) {
        this.ultimaAlteracao = ultimaAlteracao;
    }
    
    
    
}
