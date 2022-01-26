import { environment } from './../../environments/environment';
import { UsuarioService } from "./usuario/usuario.service";
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

const API = environment.apiURL;

@Injectable({
  providedIn: "root",
})
export class AutenticacaoService {
  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    //pegando o body e o header da requisição via HttpResponse e {observe:'response'}
    //recu
    return this.http
      .post(
        API+"/user/login",
        { userName: usuario, password: senha },
        { observe: "response" }
      )
      //pipe - operador que recebe varias funçoes
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(authToken);
        })
      );
  }
}
