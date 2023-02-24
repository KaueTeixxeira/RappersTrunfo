import { Component, OnInit } from '@angular/core';
import { MeuServico } from 'src/app/app.service';

@Component({
  selector: 'app-edicao-page',
  templateUrl: './edicao-page.component.html',
  styleUrls: ['./edicao-page.component.css']
})
export class EdicaoPageComponent implements OnInit {

  constructor(private meuServico: MeuServico) { }

  ngOnInit(): void {
    
  }
  modalCartas: boolean = false
  modalJogadores: boolean = false
  modalEdicaoCartas: boolean = false
  modalEdicaoJogador: boolean = false
  listaDeCartas: Array<Carta> = this.meuServico.listaDeCartas
  listaDeJogadores: Array<Jogador> = this.meuServico.listaDeUsuarios
  carta: Carta = {url: "", nomeCarta: "", freestyle: 0, originalidade: 0, impacto: 0, maisOuvidas: 0,ranking: 'C'};
  jogador: Jogador = {nome: "",numVitoria: 0, numDerrota: 0};
  verificacao!: boolean;
  criacao!: boolean;
  
  controleCartas(): void {
    this.verificacao = true;
    this.modalCartas = !this.modalCartas
  }

  controleJogadores(): void {
    this.verificacao = false;
    this.modalJogadores = !this.modalJogadores
  }

  editarCarta(carta: Carta) {
    this.carta = carta;
    console.log(carta)
    console.log(this.carta)
  }

  abrirEdicaoCartas(carta: Carta){
    this.verificacao = true
    this.carta = carta
    this.modalEdicaoCartas = !this.modalEdicaoCartas
  }

  abrirEdicaoJogadores(jogador: Jogador){
    this.jogador = jogador;
    this.modalEdicaoCartas = !this.modalEdicaoCartas
  }


  fecharEdicaoCartas(){
    this.modalEdicaoCartas = !this.modalEdicaoCartas
  }
  

  calculaWinRate(jogador: Jogador): string{
    if (jogador.numDerrota != 0 || jogador.numVitoria != 0) {
      return  Math.trunc((jogador.numVitoria/(jogador.numVitoria + jogador.numDerrota)) * 100) + "%"
    }
    return "0%"
  }

  
  criarJogador(){
    this.verificacao = false
    this.jogador = {nome: "",numVitoria: 0, numDerrota: 0};
    this.modalEdicaoCartas = !this.modalEdicaoCartas
  }


  criarCarta(){
    this.verificacao = true
    this.carta = {url: "", nomeCarta: "", freestyle: 0, originalidade: 0, impacto: 0, maisOuvidas: 0,ranking: 'C'}
    this.modalEdicaoCartas = !this.modalEdicaoCartas
  }

}


interface Carta {
  url: string;
  nomeCarta: string;
  freestyle: number;
  originalidade: number;
  impacto: number;
  maisOuvidas: number;
  ranking: string;
}

interface Jogador{
  nome: string;
  numVitoria: number;
  numDerrota: number;
}
