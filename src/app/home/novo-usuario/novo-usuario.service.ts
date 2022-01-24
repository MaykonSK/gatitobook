import { NovoUsuarioInterface } from './novo-usuario-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuarioInterface){
    return this.http.post('http://localhost:3000/user/signup', novoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.http.get('http://localhost:3000/user/exists/'+nomeUsuario)
  }
}
