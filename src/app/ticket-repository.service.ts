import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketRepositoryService {

  constructor(private http: HttpClient) { }

  apiUri: string = 'https://localhost:7149/api/HelpDesk'

  getTicketList(){
    return this.http.get(this.apiUri)
  }

}
