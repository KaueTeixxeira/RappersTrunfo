import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, take } from 'rxjs';
import { CartaComponentComponent } from '../components/carta-component/carta-component.component';
import { Carta, CartasPageComponent } from '../pages/cartas-page/cartas-page.component';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

    apiUrl: string = "http://localhost:8081/carta"

    constructor(private httpClient: HttpClient){}

    getAllCards(): Observable<any>{ // Buscar todas
        return this.httpClient.get<any>(this.apiUrl + "/all")
    }

    getOneCard(id: Number): Observable<any>{ // Buscar uma
        return this.httpClient.get(this.apiUrl + "/" + id)
    }

    createCard(carta: Carta): Observable<any>{ // Criar carta
        return this.httpClient.post<any>(this.apiUrl, carta).pipe(take(1))
    }

    deleteCard(id: Number): Observable<any>{ // Deletar carta
        return this.httpClient.delete<any>(this.apiUrl + "/delete/" + id);
    }

    editCard(id: Number, carta: Carta): Observable<any>{ // Editar carta
        return this.httpClient.put<any>(this.apiUrl + "/edit/" + id, carta);
    }
}