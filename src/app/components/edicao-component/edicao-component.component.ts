import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MeuServico } from 'src/app/app.service';

@Component({
  selector: 'app-edicao-component',
  templateUrl: './edicao-component.component.html',
  styleUrls: ['./edicao-component.component.css']
})
export class EdicaoComponentComponent implements OnInit {

  constructor(private meuServico: MeuServico, private route: Router) { }

  url!: string;
  nomeCarta!: string;
  freestyle!: number;
  originalidade!: number;
  impacto!: number;
  maisOuvidas!: number;
  ranking!: string;

  nome!: string;
  numVitoria!: number;
  numDerrota!: number;

  ngOnInit(): void {
    console.log(this.verificacao)
    this.url = this.carta.url
    this.nomeCarta = this.carta.nomeCarta
    this.freestyle = this.carta.freestyle
    this.originalidade = this.carta.originalidade
    this.impacto = this.carta.impacto
    this.maisOuvidas = this.carta.maisOuvidas
    if (this.carta.ranking == "A") {
      this.ranking = "A"
    } else if (this.carta.ranking == "B") {
      this.ranking = "B"
    } else if (this.carta.ranking == "C") {
      this.ranking = "C"
    } else {
      this.ranking = "S"
    }

    this.nome = this.jogador.nome
    this.numVitoria = this.jogador.numVitoria
    this.numDerrota = this.jogador.numDerrota


  }

  adicionarCarta() {
    this.excluirCarta()
    this.meuServico.listaDeCartas.push({
      url: this.url, nomeCarta: this.nomeCarta, freestyle: this.freestyle, originalidade: this.originalidade,
      impacto: this.impacto, maisOuvidas: this.maisOuvidas, ranking: this.ranking
    })
    this.route.navigate(['/cartas-page'])
  }

  adicionarJogador() {
    this.meuServico.listaDeUsuarios.forEach((jogador, index) => {
      if (jogador.nome == this.nome) {
        this.meuServico.listaDeUsuarios.splice(index, 1)
      }
    });
    console.log({ nome: this.nome, numVitoria: this.numVitoria, numDerrota: this.numDerrota })
    this.meuServico.listaDeUsuarios.push({ nome: this.nome, numVitoria: this.numVitoria, numDerrota: this.numDerrota })
    this.route.navigate(['/jogadores-page'])
  }

  excluirCarta() {
    this.meuServico.listaDeCartas.forEach((carta, index) => {
      if (carta.nomeCarta == this.nomeCarta) {
        this.meuServico.listaDeCartas.splice(index, 1)
        console.log(carta, index)
      }
    });
  }

  excluirJogador(){
    this.meuServico.listaDeUsuarios.forEach((jogador, index) => {
      if (jogador.nome == this.nome) {
        this.meuServico.listaDeUsuarios.splice(index, 1)
      }
    });
  }

  @Input()
  verificacao!: boolean;

  @Input()
  carta!: Carta;

  @Input()
  jogador!: Jogador



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


interface Jogador {
  nome: string;
  numVitoria: number;
  numDerrota: number;
}



