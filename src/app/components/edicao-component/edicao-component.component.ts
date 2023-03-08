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

  alertBoolean: boolean = false
  habilitado: boolean = false
  frase!: string;

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
    if (this.carta.nomeCarta != "" || this.jogador.nome != "") {
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
  }

  adicionarCarta() {
    this.meuServico.listaDeCartas.forEach((carta, index) => {
      if (carta.nomeCarta == this.carta.nomeCarta) {
        this.meuServico.listaDeCartas.splice(index, 1)
      }
    });
    this.meuServico.listaDeCartas.push({
      url: this.url, nomeCarta: this.nomeCarta, freestyle: this.freestyle, originalidade: this.originalidade,
      impacto: this.impacto, maisOuvidas: this.maisOuvidas, ranking: this.ranking
    })
    this.frase = "Carta cadastrada com sucesso!"
    this.modalzera();
  }

  adicionarJogador() {
    this.meuServico.listaDeUsuarios.forEach((jogador, index) => {
      if (jogador.nome == this.jogador.nome) {
        this.meuServico.listaDeUsuarios.splice(index, 1)
      }
    });
    this.meuServico.listaDeUsuarios.push({ nome: this.nome, numVitoria: this.numVitoria, numDerrota: this.numDerrota })
    this.frase = "Jogador cadastrado com sucesso!"
    this.modalzera();
  }

  excluirCarta() {
    this.meuServico.listaDeCartas.forEach((carta, index) => {
      if (carta.nomeCarta == this.carta.nomeCarta) {
        this.meuServico.listaDeCartas.splice(index, 1)
        this.frase = "Carta excluída!"
        this.modalzera();
      }
    });
  }

  excluirJogador(){
    this.meuServico.listaDeUsuarios.forEach((jogador, index) => {
      if (jogador.nome == this.jogador.nome) {
        this.meuServico.listaDeUsuarios.splice(index, 1)
        this.frase = "Jogador excluída!"
        this.modalzera();
      }
    });

  }

  @Input()
  verificacao!: boolean;

  @Input()
  carta!: Carta;

  @Input()
  jogador!: Jogador

  modalzera(){
    this.alertBoolean = !this.alertBoolean
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


interface Jogador {
  nome: string;
  numVitoria: number;
  numDerrota: number;
}



