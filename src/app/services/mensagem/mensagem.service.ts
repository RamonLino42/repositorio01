import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

 private Mensagem: string;
 //alertPriority: boolean

  constructor() {
    this.Mensagem ="";
    //this.alertPriority = false;
   }

   get():string{
    return this.Mensagem;
   }
   set(mensagem:string):void{
     this.Mensagem = mensagem;
   }
   clear():void{
     this.Mensagem="";
   }
  /* responseAlertColorRed(error: HttpErrorResponse): void{
    if (error.status === 0 || HttpErrorResponse.prototype.status === 500){
      this.alertPriority = true;
    }
  }

  responseAlertColorOrange(): void{
    if (HttpErrorResponse.prototype.status === 400){
      this.alertPriority = true;
    }
    console.log(HttpErrorResponse.toString)
  }

  responseAlertColorBlue(): void{
    if (HttpErrorResponse.prototype.status === null){
      this.alertPriority = true;
    }
  }*/
  

}
