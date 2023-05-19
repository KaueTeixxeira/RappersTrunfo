import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MeuServico } from 'src/app/app.service';
import { LoginPageComponent } from '../login-page/login-page.component';
import { Jogador } from 'src/app/interfaces/Jogador';
import { JogadorService } from 'src/app/service/jogador.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  ngOnInit(): void {
    this.itens = [{ titulo: "/assets/imagens/jogarLogoP.png", rota: "/game-page" }, { titulo: "/assets/imagens/cartasLogoP.png", rota: "/cartas-page" }, { titulo: "/assets/imagens/jgoadoresLogoP.png", rota: "/jogadores-page" }, 
    { titulo: "/assets/imagens/perfilLogoP.png", rota: "/perfil-page" }];
    
    this.jogador = this.jogadorService.getPerfil();
    if (this.jogador.id == 1){
      this.itens.push({ titulo: "/assets/imagens/editarLogoP.png", rota: "/edicao-page" })
    }
  }

  informacoes!: any;
  jogador!: Jogador;
  
  itens!: Array<Item>;
  
  constructor(private jogadorService: JogadorService) {
  }

}

interface Item {
  titulo: string
  rota: string
} 
