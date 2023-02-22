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
  carta!: Carta;
  verificacao!: boolean;
  
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

  abrirEdicaoCartas(){
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
  id:number
  nome: String;
  numVitoria: number;
  numDerrota: number;
}
