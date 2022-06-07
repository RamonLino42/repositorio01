/*import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util'; 

@Injectable({
  providedIn: 'root'

})
export class ErrorService {

  constructor(private httpClient: HttpClient, private actvationRoute: Router, private error: Error) {
  
  }

  errorResponse(){
    if(error.prototype.status === 200){
      console.log("Tudo belezinha");
    }
    else if(error.prototype.status === 404){
      console.log("Não Encontrado");
    }
    else if(error.prototype.status === 404){
      console.log("Requisição Invalida")
    }
    else if(error.prototype.status === 500){
      console.log("Erro interno do Servidor")
    }
    else{
      console.log("Erro Desconhecido");
    }
  }
  


    /*function getDescrictionError(erro: Error): String{
    let descricaoErro = "";
    switch (erro){
        case 1040:
            descricaoErro = "NÃO ENCONTRADO";
            break;
        case 1004:
            descricaoErro = "NÃO EXISTEM DADOS PARA EXIBIR";
            break;
        case 5000:
            descricaoErro = "ERRO INTERNO NO SERVIDOR";
            break;
        case 4000:
            descricaoErro = "REQUISIÇÃO DE ENTRADA INVÁLIDA";
            break;
            case -1:
              descricaoErro = "ERRO DESCONHECIDO";
              break;
          default:
              descricaoErro = `ERRO DESCONHECIDO: ${erro}`;
              break;
      }
      return descricaoErro;
  } 

  function gerenciarRespostaExclusao(response: Error) {
    if (response.message === "200") {
      console.log("Tudo certo")
    } else if (response.message === "404") {
      throw "1040";
    } else if (response.message === "500") {
      throw "5000";
    } else if (response.message === "400") {
      throw "4000";
    } else {
      throw "-1";
    }
  }
  function errorMenager(): void{

  }

  }*/


