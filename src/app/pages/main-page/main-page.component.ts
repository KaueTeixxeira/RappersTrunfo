import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MeuServico } from 'src/app/app.service';
import { LoginPageComponent } from '../login-page/login-page.component';
import { Jogador } from 'src/app/interfaces/Jogador';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  ngOnInit(): void {
    this.itens = [{ titulo: "/assets/imagens/jogarLogoP.png", rota: "/main-page" }, { titulo: "/assets/imagens/cartasLogoP.png", rota: "/cartas-page" }, { titulo: "/assets/imagens/jgoadoresLogoP.png", rota: "/jogadores-page" }, 
    { titulo: "/assets/imagens/perfilLogoP.png", rota: "/perfil-page" }];
    this.informacoes = sessionStorage.getItem("perfil");
    this.jogador = JSON.parse(this.informacoes);
    if (this.jogador.id == 1){
      this.itens.push({ titulo: "/assets/imagens/editarLogoP.png", rota: "/edicao-page" })
    }
  }



  informacoes!: any;
  jogador!: Jogador;
  
  itens!: Array<Item>;
  usuario: string;
  senha: string;

  constructor(private meuServico: MeuServico) {
    this.usuario = this.meuServico.nome;
    this.senha = this.meuServico.senha;
  }
}

class Usuario {

  usuario: string;
  senha: string;

  constructor(usuario: string, senha: string) {
    this.usuario = usuario;
    this.senha = senha;
  }

  mostrarDados(): void {
    console.log(this)
  }

  mostraNome(): string {
    return this.usuario;
  }
}

interface Item {
  titulo: string
  rota: string
} 
