import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //recuperando os dados dos input
  usuario = ''
  senha = ''
  mensagemErro = false;

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.autenticacaoService.autenticar(this.usuario, this.senha).subscribe(dados => {
      //console.log('Autenticado com sucesso. '+dados)
      this.router.navigate(['animais']) //direcionando o usuario autenticado para a rota animais
    }, erro => {
      console.log('Dados incorreto. '+erro)
      this.mensagemErro = true
    })
  }

}
