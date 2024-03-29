import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeuServico } from 'src/app/app.service';
import { Carta } from 'src/app/interfaces/Carta';
import { CartaService } from 'src/app/service/carta.service';

@Component({
  selector: 'app-cartas-page',
  templateUrl: './cartas-page.component.html',
  styleUrls: ['./cartas-page.component.css']
})
export class CartasPageComponent implements OnInit {

  constructor(private meuServico: CartaService, private route: Router) { }
  listaDeCartas: Array<Carta> = [];
  ngOnInit(): void {
    this.getCards(0)

    // BUSCAR UMA CARTA 
    //this.meuServico.getOneCard(1).subscribe((data: Carta) => {
    //   console.log(data)
    // })

    // DELETA CARTA
    // this.meuServico.deleteCard(1).subscribe((data: Carta) => {
    //   console.log(data);
    // })

   
    // let carta: Carta = new Carta("https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547","Dr.Dre",87,96,98,75,"S");
    // this.meuServico.createCard(carta).subscribe((data: Carta) => {
    //   console.log(data)
    // })

    // EDITAR
    // let carta: Carta = new Carta("https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547","Dr.Dre",87,96,98,75,"A");
    // this.meuServico.editCard(2,carta).subscribe((data: Carta) => {
    //   console.log(carta);
    // })
      
    
  }
  currentPage: number = 0;
  last: boolean = false
  getCards(page: number){
    this.meuServico.getSomeCards(page,6).subscribe((data: any) => {
      console.log(data)
      this.currentPage = data.pageable.pageNumber
      this.listaDeCartas.push(...data.content);
      this.last = data.last
    });
  }

  exit(){
    this.route.navigate(['/main-page'])
  }
}
