import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/interfaces/Carta';
import { Jogador } from 'src/app/interfaces/Jogador';
import { CartaService } from 'src/app/service/carta.service';
import { JogadorService } from 'src/app/service/jogador.service';

@Component({
  selector: 'app-arena-page',
  templateUrl: './arena-page.component.html',
  styleUrls: ['./arena-page.component.css']
})
export class ArenaPageComponent implements OnInit {

  constructor(private cartaService: CartaService, private jogadorService: JogadorService) { }

  ngOnInit(): void {
    this.pegarBaralho();
    this.adversario = this.jogadorService.getAdversario()
    this.desafiante = this.jogadorService.getPerfil()

    this.cartaService.getOneCard(1).subscribe((carta: Carta) => {
      this.carta = carta
      this.url = carta.url
      this.nomeCarta = carta.nome
      this.freestyle = carta.freestyle
      this.originalidade = carta.originalidade
      this.impacto = carta.impacto
      this.maisOuvidas = carta.maisOuvidas
    })
  }

  carta!:Carta;

  desafiante!: Jogador;
  adversario!: Jogador;

  deckFirstPlayer!: Carta[]
  deckSecondPlayer!: Carta[]

  pegarBaralho() {
    this.cartaService.starGame().subscribe((decks: Carta[][]) => {
      this.deckFirstPlayer = decks[0];
      this.deckSecondPlayer = decks[1];
      console.log(this.deckFirstPlayer.length)
      console.log(this.deckSecondPlayer.length)
    })
  }

  
  url!: string;
  nomeCarta!: string;
  freestyle!: number;
  originalidade!: number;
  impacto!: number;
  maisOuvidas!: number;
  ranking!: string;

  
}
