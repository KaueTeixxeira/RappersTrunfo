import { Component, OnInit } from '@angular/core';
import { MeuServico } from 'src/app/app.service';
import { Jogador } from '../jogadores-page/jogadores-page.component';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent implements OnInit {

  constructor(private meuServico: MeuServico) { }

  nome!: String ;
  senha!: string;
  numVitoria!: number;
  numDerrota!: number;
  porcVitoria!: string;
  informacoes: any;
  jogador!: Jogador;
  ngOnInit(): void {
    this.informacoes = sessionStorage.getItem("perfil")
    console.log(JSON.parse(this.informacoes))
    this.jogador = JSON.parse(this.informacoes);
    this.nome = this.jogador.nome;
    this.numVitoria =  this.jogador.numVitoria
    this.numDerrota =  this.jogador.numDerrota
    this.porcVitoria = Math.trunc((this.jogador.numVitoria/(this.jogador.numVitoria + this.jogador.numDerrota)) * 100) + "%"
  }



}


