import { Component, OnInit } from '@angular/core';
import { MeuServico } from 'src/app/app.service';

@Component({
  selector: 'app-cartas-page',
  templateUrl: './cartas-page.component.html',
  styleUrls: ['./cartas-page.component.css']
})
export class CartasPageComponent implements OnInit {

  constructor(private meuServico: MeuServico) { }
  listaDeCartas: Array<Carta> = this.meuServico.listaDeCartas
  ngOnInit(): void {

  }

  // listaDeCartas: Array<Carta> = criaCartas();
}

function criaCartas(): Array<Carta> {
  return [new Carta("https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547","Dr.Dre", 87, 96, 98, 75, 'S'),new Carta("https://i.scdn.co/image/ab6761610000e5ebc63aded6f4bf4d06d1377106","Lil Wayne", 83, 92, 85, 82, 'C'),
  new Carta("https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9","Drake", 89, 84, 82, 98, 'C'), new Carta("https://i.scdn.co/image/ab6761610000e5ebc75afcd5a9027f60eaebb5e4","Jay-z", 86, 85, 90, 94, 'C')]
}

class Carta {
  url!: string;
  nomeCarta!: string;
  freestyle!: number;
  originalidade!: number;
  impacto!: number;
  maisOuvidas!: number;
  ranking!: string;


  constructor(url: string, nomeCarta: string, freestyle: number, originalidade: number, impacto: number,
     maisOuvidas: number, ranking: string)
  {
    this.url = url;
    this.nomeCarta = nomeCarta;
    this.freestyle = freestyle
    this.originalidade = originalidade
    this.impacto = impacto
    this.maisOuvidas = maisOuvidas
    this.ranking = ranking
  }
}
