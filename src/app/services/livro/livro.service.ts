import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from 'src/app/models/livro';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  constructor(private httpClient: HttpClient) {}

  post(livro: Livro): Observable<Livro> {
    const uri: string = "https://localhost:44393/api/livros";
    return this.httpClient.post<Livro>(uri, livro);
  }

  get(): Observable<Livro[]>{
    const uri: string = "https://localhost:44393/api/livros";
    return this.httpClient.get<Livro[]>(uri);
  }

  getById(id: number): Observable<Livro>{

    const uri: string = `https://localhost:44393/api/livros/${id}`;
    return this.httpClient.get<Livro>(uri)

  }

  put(id:number, livro: Livro): Observable<Livro> {
    const uri: string = `https://localhost:44393/api/livros/${id}`;
    return this.httpClient.put<Livro>(uri, livro);
  }
  delete(id:number): Observable<Livro>{
    const uri: string = `https://localhost:44393/api/livros/${id}`;
    return this.httpClient.delete<Livro>(uri);
  }

}
