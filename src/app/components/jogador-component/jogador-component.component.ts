import { Component, Input, OnInit } from '@angular/core';
import { Jogador } from 'src/app/interfaces/Jogador';

@Component({
  selector: 'app-jogador-component',
  templateUrl: './jogador-component.component.html',
  styleUrls: ['./jogador-component.component.css']
})
export class JogadorComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  jogador!: Jogador;

  calculaWinRate(jogador: Jogador): string{
    if (jogador.numDerrota != 0 || jogador.numVitoria != 0) {
      return  Math.trunc((jogador.numVitoria/(jogador.numVitoria + jogador.numDerrota)) * 100) + "%"
    }
    return "0%"
  }

  // FAZER A HOVER CLASS AQUI PARA QUE AO SELECIONADO O ITEM FIQUE COM O ESTADO DE HOVER 
  @Input() jogadorSelecionado!: Jogador;


 
}
