import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuServico } from './app.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { OpcoesComponentComponent } from './components/opcoes-component/opcoes-component.component';
import { CartasPageComponent } from './pages/cartas-page/cartas-page.component';
import { CartaComponentComponent } from './components/carta-component/carta-component.component';
import { JogadoresPageComponent } from './pages/jogadores-page/jogadores-page.component';
import { JogadorComponentComponent } from './components/jogador-component/jogador-component.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { EdicaoPageComponent } from './pages/edicao-page/edicao-page.component';
import { EdicaoComponentComponent } from './components/edicao-component/edicao-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ExitButtonComponent } from './components/exit-button/exit-button.component';
import { GamePageComponent } from './pages/game-page/game-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    HeaderComponentComponent,
    OpcoesComponentComponent,
    CartasPageComponent,
    CartaComponentComponent,
    JogadoresPageComponent,
    JogadorComponentComponent,
    PerfilPageComponent,
    EdicaoPageComponent,
    EdicaoComponentComponent,
    ExitButtonComponent,
    GamePageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MeuServico],
  bootstrap: [AppComponent]
})
export class AppModule { }
