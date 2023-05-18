import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, take } from 'rxjs';
import { CartaComponentComponent } from '../components/carta-component/carta-component.component';
import { CartasPageComponent } from '../pages/cartas-page/cartas-page.component';
import { Jogador } from '../interfaces/Jogador';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

    perfil!: Jogador;
    adversario!: Jogador;

    informacoes!: any;
    apiUrl: string = "http://localhost:8081/jogador"

    constructor(private httpClient: HttpClient, private perfilGuard: SessionStorageService){}

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

    setAdversario(adversario : Jogador){
        this.perfilGuard.setItem('adversario',JSON.stringify(adversario));
    }

    getAdversario(): Jogador{
        this.informacoes = this.perfilGuard.getItem("adversario")
        this.adversario = JSON.parse(this.informacoes)
        console.log(this.adversario)
        return this.adversario
    }

    setPerfil(jogador: Jogador){
        this.perfilGuard.setItem('perfil',JSON.stringify(jogador));
    }

    getPerfil(): Jogador{
        this.informacoes = this.perfilGuard.getItem("perfil")
        this.perfil = JSON.parse(this.informacoes)
        return this.perfil
    }
}