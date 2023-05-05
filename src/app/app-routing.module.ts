import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartasPageComponent } from './pages/cartas-page/cartas-page.component';
import { EdicaoPageComponent } from './pages/edicao-page/edicao-page.component';
import { JogadoresPageComponent } from './pages/jogadores-page/jogadores-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

const routes: Routes = [
  {path: '',component: LoginPageComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'cartas-page', component: CartasPageComponent},
  {path: 'jogadores-page', component: JogadoresPageComponent},
  {path: 'perfil-page', component: PerfilPageComponent},
  {path: 'edicao-page', component: EdicaoPageComponent},
  {path: 'game-page', component: GamePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
