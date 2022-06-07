import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroComponent } from './components/erro/erro.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'livros',
    loadChildren: () =>
      import('./components/livro/livro.module').then((lm) => lm.LivroModule),
  },
  {
    path: 'funcionarios',
    loadChildren: () =>
      import('./components/funcionario/funcionario.module').then(
        (fu) => fu.FuncionarioModule
      ),
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "**",
    component: ErroComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
