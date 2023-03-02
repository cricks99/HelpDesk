import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ITicket } from './interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketRepositoryService {

  constructor(private http: HttpClient) { }

  apiUri: string = 'https://localhost:7177/api/Ticket'

  getTicketList(){
    return this.http.get(this.apiUri)
  }
  addNewTicket(ticket:ITicket) {
    return this.http.post(`${this.apiUri}/add`, ticket);
  }
  getTicketDetails(ticketId: number){
    return this.http.get<ITicket>(this.apiUri + ticketId)
  }

}

