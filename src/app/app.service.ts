import { Injectable } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HttpClient } from "@angular/common/http";
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeuServico {

  apiUrl: String = "http://localhost:8081/"
  nome!: string ;
  senha!: string;
  numVitoria!: number;
  numDerrota!: number;
  porcVitoria: string = "0%";
  listaDeCartas: Array<Carta> = [new Carta("https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547","Dr.Dre", 87, 96, 98, 75,'S'),
  new Carta("https://i.scdn.co/image/ab6761610000e5ebc63aded6f4bf4d06d1377106","Lil Wayne", 83, 92, 85, 82, 'C'),
  new Carta("https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9","Drake", 89, 84, 82, 98, 'C'),
  new Carta("https://i.scdn.co/image/ab6761610000e5ebc75afcd5a9027f60eaebb5e4","Jay-z", 86, 85, 90, 94, 'C'),
  new Carta("https://i.scdn.co/image/ab6775700000ee8582775e2485ead59dd0b2b5e3","Kendrick Lamar", 95, 86, 87, 93, 'C'),
  new Carta("https://i.scdn.co/image/ab6761610000e5ebf7d9deb32a290a5ba574ee1c","Nas", 93, 92, 91, 80, 'B'),
  new Carta("https://i.scdn.co/image/ab6761610000e5eb9a398209a4ef3360dce2dec4","Snoop Dogg", 82, 94, 90, 92, 'B') ]
  listaDeUsuarios: Array<Jogador> = [{nome: "Kauê",numVitoria: 1, numDerrota: 1}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}]

  
  constructor(private httpClient: HttpClient){}

  atualizarDados(nome: string, senha:string, numVitoria: number, numDerrota:number) {
    this.nome = nome
    this.senha = senha
    this.numVitoria = numVitoria;
    this.numDerrota = numDerrota;
    if (numDerrota != 0 || numVitoria != 0) {
      this.porcVitoria = Math.trunc((numVitoria/(numVitoria + numDerrota)) * 100) + "%"
    }
  }

  getAllCartas(): Observable<any>{
    return this.httpClient.get<any>(this.apiUrl + "carta/all")
  }
  getAllPlayers(): Observable<any>{
    return this.httpClient.get<any>(this.apiUrl + "jogador/all")
  }

  createCarta(carta: Carta){
    console.log(carta)
    return this.httpClient.post(this.apiUrl + "carta",carta).pipe(take(1));
  }

  // createCarta(Carta){

  // }
  
}

// interface Carta {
//   url: string;
//   nomeCarta: string;
//   freestyle: number;
//   originalidade: number;
//   impacto: number;
//   maisOuvidas: number;
//   ranking: string;
// }

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
interface Jogador {
  nome: string;
  numVitoria: number;
  numDerrota: number;
}