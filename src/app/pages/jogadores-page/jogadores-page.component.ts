import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MeuServico } from 'src/app/app.service';
import { Jogador } from 'src/app/interfaces/Jogador';
import { JogadorService } from 'src/app/service/jogador.service';

@Component({
  selector: 'app-jogadores-page',
  templateUrl: './jogadores-page.component.html',
  styleUrls: ['./jogadores-page.component.css']
})
export class JogadoresPageComponent implements OnInit {

  constructor(private meuServico: JogadorService, private route: Router) { }

  ngOnInit(): void {
    this.meuServico.getAllPlayers().subscribe((data: Array<Jogador>) => {
      this.listaDeJogadores = data;
    });

    // CRIAR JOGADOR
    // let player: Jogador = new Jogador("Kauê",0,0,"123");
    // this.meuServico.createPlayer(player).subscribe((data: Jogador) => {
    //   console.log(data)
    // })

    // DELETA JOGADOR
    // this.meuServico.deletePlayer(1).subscribe((data: Jogador) => {
    //   console.log(data);
    // })

    // EDITAR
    // let player: Jogador = new Jogador("Kauê",0,0,"321");
    // this.meuServico.editPlayer(2,player).subscribe((data: Jogador) => {
    //   console.log(data);
    // })

    // BUSCAR UMA CARTA 
    // this.meuServico.getOnePlayer(2).subscribe((data: Jogador) => {
    //   console.log(data)
    // })

  }

  listaDeJogadores!: Array<Jogador>;

  calculaWinRate(jogador: Jogador): string{
    if (jogador.numDerrota != 0 || jogador.numVitoria != 0) {
      return  Math.trunc((jogador.numVitoria/(jogador.numVitoria + jogador.numDerrota)) * 100) + "%"
    }
    return "0%"
  }

  exit(){
    this.route.navigate(['/main-page'])
  }
}


