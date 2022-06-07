import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-livro-index',
  templateUrl: './livro-index.component.html',
  styleUrls: ['./livro-index.component.css'],
})
export class LivroIndexComponent implements OnInit {

  SearchId: string;
  Livros: Livro[];
  activateRoute: any;
  erro01: number;

  constructor(private router: Router, private livroService: LivroService, /*private errorService: ErrorService*/) {
    this.Livros = new Array<Livro>();
    this.SearchId ="";
    this.erro01 = HttpErrorResponse.prototype.status;
  }

  ngOnInit(): void { }

  search(): void {
    console.log("pesquisar-livro-index");
    if(this.SearchId === ""){
      this.get();
      return;
    }
      this.getById(Number(this.SearchId))
  }

  

  get(): void{
    this.livroService.get()
      .pipe(
        take(1)
      )
    .subscribe({
     next: livros => {
      this.Livros = livros;
      console.log(`next = Livro:${JSON.stringify(this.Livros)}`);
      },
      error: erro =>{
        console.log(`error=>`,erro)
      },
      complete(){
        console.log("complete")
      },
    })
  }
  getById(id: number): void {
    console.log(`get=>${id}`);
    this.livroService.getById(id)
      .pipe(
        take(1)
      )
      .subscribe({
        next: (livro) => {
          this.Livros =[];
          this.Livros.push(livro);
          //console.log(`next => Livro:${JSON.stringify(this.Livros)}`);
        },
        error: erro => {
         console.log(`erro=>`,erro);
         console.log(erro.status);
        // this.errorService.errorResponse();

        } 
      })
  }

  goToCreate(): void {
    this.router.navigate(['/livros/livro-create']);
  }

  goToEdit(): void{
    this.router.navigate(['/livros/livro-edit/{{livro.Id}}'])
  }

  delete(Id:number): void{
    console.log("excluir")
    this.livroService.delete(Id)
    .pipe(
      take(1)
    )
    .subscribe({
       error: erro => {
         console.log(`error =>`,erro)
        
         //alert(this.getDescrictionError);
       },
       complete: () =>{
        console.log("Livro Alterado");
        alert("Livro alterado com sucesso");
        this.SearchId = "";
        this.search();
       }
    });
  }
  confirmDelete(id: number): void {
    if (confirm(`Deseja excluir o livro ${id}?`)) {
      this.delete(id);
    }
  }

  

  /*getDescrictionError(erro: any): string{
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

  gerenciarRespostaExclusao(response) {
    if (response.status === 200) {
      this.errorMenager();
      this.search();
    } else if (response.status === 404) {
      throw 1040;
    } else if (response.status === 500) {
      throw 5000;
    } else if (response.status === 400) {
      throw 4000;
    } else {
      throw -1;
    }
  }
  errorMenager(): void{

  }*/

}


