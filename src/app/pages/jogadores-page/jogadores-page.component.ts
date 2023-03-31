import { Component, OnInit } from '@angular/core';
import { MeuServico } from 'src/app/app.service';

@Component({
  selector: 'app-jogadores-page',
  templateUrl: './jogadores-page.component.html',
  styleUrls: ['./jogadores-page.component.css']
})
export class JogadoresPageComponent implements OnInit {

  constructor(private meuServico: MeuServico) { }

  ngOnInit(): void {
    this.meuServico.getAllPlayers().subscribe((data: Array<Jogador>) => {
      this.listaDeJogadores = data;
      console.log(this.listaDeJogadores); // Exibe os dados recebidos no console
    });
  }

  listaDeJogadores!: Array<Jogador>;

  calculaWinRate(jogador: Jogador): string{
    if (jogador.numDerrota != 0 || jogador.numVitoria != 0) {
      return  Math.trunc((jogador.numVitoria/(jogador.numVitoria + jogador.numDerrota)) * 100) + "%"
    }
    return "0%"
  }

}

class Jogador{

  nome!: String;
  numVitoria!: number;
  numDerrota!: number;

  constructor(nome:String, numVitoria: number, numDerrota: number) {
    this.nome = nome;
    this.numVitoria = numVitoria;
    this.numDerrota = numDerrota;
    
  }
}
