import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { LivroMensagrns } from '../livro-mensagens';
//import { Livro } from '../../../livro';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css'],
})
export class LivroCreateComponent implements OnInit {
  Livro: Livro;

  constructor(private router: Router, 
              private livroService: LivroService,
              private mensagemService: MensagemService) {

    this.Livro = new Livro();
  }

  ngOnInit(): void {
    //this.Titulo = this.Titulo;
    //this.Autor = this.Autor;
    //this.numeroDePaginas = this.numeroDePaginas;
  }

  create(): void {
    this.livroService.post(this.Livro)
      .pipe(take(1))
      .subscribe({
        next: livro => this.handleResponseOk(livro),
        error: error => this.handleResponseError(error)
      });
  }
  handleResponseOk(livro: Livro):void{
    this.Livro = livro;
    this.showMessageOk();
    this.goToIndex();
  }

  handleResponseError(error: HttpErrorResponse): void{

    switch(error.status){
      case 0:
        this.mensagemService.set(error.message);
      break;
      case 400:
        this.mensagemService.set(LivroMensagrns.Error400ErrorBedRequestPtBr);
      break;
      case 500:
        this.mensagemService.set(LivroMensagrns.Error500InternalServerErrorPtBr);
      break;
    }

   /* if(error.status === 0){
      this.mensagemService.set(error.message);
    }
    else if (error.status === 400){
      this.mensagemService.set(LivroMensagrns.Error400ErrorBedRequestPtBr);
    }
    else if (error.status === 500){
      this.mensagemService.set(LivroMensagrns.Error500InternalServerErrorPtBr)
    }*/
  }

  showMessageOk(): void{
    this.mensagemService.set(LivroMensagrns.CreateOkPtBr);
  }

  goToIndex(): void {
    this.router.navigate(['/livros/livro-index']);
  }
  
}
