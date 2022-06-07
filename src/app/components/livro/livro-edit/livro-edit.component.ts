import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { LivroMensagrns } from '../livro-mensagens';

@Component({
  selector: 'app-livro-edit',
  templateUrl: './livro-edit.component.html',
  styleUrls: ['./livro-edit.component.css']
})
export class LivroEditComponent implements OnInit {

  private readonly Id: number;
  Livro: Livro;

  constructor(private  activateRoute: ActivatedRoute,
              private livroService: LivroService,
              private router: Router,
              private mensagemService: MensagemService) {

    this.Id = Number(this.activateRoute.snapshot.paramMap.get("id"));
    this.Livro = new Livro();
   }

  ngOnInit(): void {
    this.get(this.Id)
  }

  get(id: number): void {
    this.livroService.getById(id)
      .pipe(take(1))
      .subscribe({
        next: livro => this.handleResponseGetOk(livro),
        error: livro => this.handleResponseError(livro),
      })
  }
  handleResponseGetOk(livro: Livro): void{
    this.Livro = livro;
  }

  update(): void {
    this.livroService.put(this.Id, this.Livro)
    .pipe (take(1))
    .subscribe({
      next: livro => this.handleResponseUpdateOk(livro),
      error: error => this.handleResponseError(error)   
    });
 }

 handleResponseUpdateOk(livro: Livro):void{
  this.Livro = livro;
  this.showMessageOk();
  this.goToIndex();
}

showMessageOk(): void{
  this.mensagemService.set(LivroMensagrns.EditOkPtBr);
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
    case 404:
      this.mensagemService.set(LivroMensagrns.Error404NotFound);
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
  }
  else if (error.status === 404){
    this.mensagemService.set(LivroMensagrns.Error404NotFound)
  }*/

}


  

  goToIndex(){
    this.router.navigate(['/livros/livro-index'])
  }


}
