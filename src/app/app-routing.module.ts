import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', loadChildren: () => import ('./home/home.module').then((m)=> m.HomeModule)},
  //assim que o usuario entrar na rota home, vai carregar o modulo
  //lazy loading
  {path: 'animais', loadChildren: () => import('./animais/animais.module').then((m)=> m.AnimaisModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
