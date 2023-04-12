import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, take } from 'rxjs';
import { CartaComponentComponent } from '../components/carta-component/carta-component.component';
import { Carta, CartasPageComponent } from '../pages/cartas-page/cartas-page.component';
import { Jogador } from '../pages/jogadores-page/jogadores-page.component';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

    apiUrl: string = "http://localhost:8081/jogador"

    constructor(private httpClient: HttpClient){}

    getAllPlayers(): Observable<any>{ // Buscar todas
        return this.httpClient.get<any>(this.apiUrl + "/all")
    }

    getOnePlayer(id: String): Observable<any>{ // Buscar uma
        return this.httpClient.get(this.apiUrl + "/" + id)
    }

    createPlayer(jogador: Jogador): Observable<any>{ // Criar jogador
        return this.httpClient.post<any>(this.apiUrl, jogador).pipe(take(1))
    }

    deletePlayer(id: Number): Observable<any>{ // Deletar jogador
        return this.httpClient.delete<any>(this.apiUrl + "/delete/" + id);
    }

    editPlayer(id: Number, jogador: Jogador): Observable<any>{ // Editar jogador
        return this.httpClient.put<any>(this.apiUrl + "/edit/" + id, jogador);
    }
}