import { Component, OnInit } from '@angular/core';
import { MeuServico } from 'src/app/app.service';

@Component({
  selector: 'app-cartas-page',
  templateUrl: './cartas-page.component.html',
  styleUrls: ['./cartas-page.component.css']
})
export class CartasPageComponent implements OnInit {

  constructor(private meuServico: MeuServico) { }
  listaDeCartas!: Array<Carta>;
  ngOnInit(): void {
    this.meuServico.getAllCartas().subscribe((data: Array<Carta>) => {
      this.listaDeCartas = data;
      console.log(this.listaDeCartas); // Exibe os dados recebidos no console
    });

  }

  // listaDeCartas: Array<Carta> = criaCartas();
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
